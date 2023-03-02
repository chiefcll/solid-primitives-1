import { filterInstance } from "@solid-primitives/immutable";
import { asArray, chain, ExtractIfPossible, Many, ResolvedChildren } from "@solid-primitives/utils";
import { Accessor, children, createComputed, createMemo, JSX, on, onCleanup } from "solid-js";

/**
 * Type for the `ref` prop
 */
export type Ref<T> = T | ((el: T) => void) | undefined;

/**
 * Component properties with types for `ref` prop
 * ```ts
 * {
 *    ref?: T | ((el: T) => void);
 * }
 * ```
 */
export interface RefProps<T> {
  ref?: Ref<T>;
}

/**
 * Utility for using jsx refs both for local variables and providing it to the `props.ref` for component consumers.
 * @param refs list of ref setters. Can be a `props.ref` prop for ref forwarding or a setter to a local variable (`el => ref = el`).
 * @example
 * ```tsx
 * interface ButtonProps {
 *    ref?: Ref<HTMLButtonElement>
 * }
 * const Button = (props: ButtonProps) => {
 *    let ref: HTMLButtonElement | undefined
 *    onMount(() => {
 *        // use the local ref
 *    })
 *    return <button ref={mergeRefs(props.ref, el => ref = el)} />
 * }
 *
 * // in consumer's component:
 * let ref: HTMLButtonElement | undefined
 * <Button ref={ref} />
 * ```
 */
export function mergeRefs<T>(...refs: Ref<T>[]): (el: T) => void {
  return chain(refs as ((el: T) => void)[]);
}

/**
 * Utility for resolving recursively nested JSX children to a single element or an array of elements using a predicate.
 *
 * It does **not** create a computation - should be wrapped in one to repeat the resolution on changes.
 *
 * @param value JSX children
 * @param predicate predicate to filter elements
 * @returns single element or an array of elements or `null` if no elements were found
 */
export function getResolvedElements<T extends object>(
  value: JSX.Element,
  predicate: (item: JSX.Element | T) => item is T,
): T | T[] | null {
  if (predicate(value)) return value;
  if (typeof value === "function" && !value.length) return getResolvedElements(value(), predicate);
  if (Array.isArray(value)) {
    const results: T[] = [];
    for (const item of value) {
      const result = getResolvedElements(item, predicate);
      if (result)
        Array.isArray(result) ? results.push.apply(results, result) : results.push(result);
    }
    return results.length ? results : null;
  }
  return null;
}

export type ResolveChildrenReturn<T extends object> = Accessor<T | T[] | null> & {
  toArray: () => T[];
};

/**
 * Utility for resolving recursively nested JSX children to a single element or an array of elements using a predicate.
 *
 * @param fn Accessor of JSX children
 * @param predicate predicate to filter elements.
 * ```ts
 * // default predicate
 * (item: JSX.Element): item is Element => item instanceof Element
 * ```
 * @returns Signal of a single element or an array of elements or `null` if no elements were found
 * ```ts
 * Accessor<T | T[] | null> & { toArray: () => T[] }
 * ```
 * @example
 * ```tsx
 * function Button(props: ParentProps) {
 *   const children = resolveElements(() => props.children)
 *   return <For each={children.toArray()}>
 *    {child => <div>{child.localName}: {child}</div>}
 *  </For>
 * }
 * ```
 */
export function resolveElements(fn: Accessor<JSX.Element>): ResolveChildrenReturn<Element>;
export function resolveElements<T extends object>(
  fn: Accessor<JSX.Element>,
  predicate: (item: JSX.Element | T) => item is T,
): ResolveChildrenReturn<T>;
export function resolveElements(
  fn: Accessor<JSX.Element>,
  predicate = (item: unknown | Element): item is Element => item instanceof Element,
): ResolveChildrenReturn<Element> {
  const children = createMemo(fn);
  const memo = createMemo(() =>
    getResolvedElements(children(), predicate),
  ) as ResolveChildrenReturn<Element>;
  memo.toArray = () => {
    const value = memo();
    return Array.isArray(value) ? value : value ? [value] : [];
  };
  return memo;
}

/**
 * Utility for resolving recursively nested JSX children in search of the first element that matches a predicate.
 *
 * It does **not** create a computation - should be wrapped in one to repeat the resolution on changes.
 *
 * @param value JSX children
 * @param predicate predicate to filter elements
 * @returns single found element or `null` if no elements were found
 */
export function getFirstChild<T extends object>(
  value: JSX.Element,
  predicate: (item: JSX.Element | T) => item is T,
): T | null {
  if (predicate(value)) return value;
  if (typeof value === "function" && !value.length) return getFirstChild(value(), predicate);
  if (Array.isArray(value)) {
    for (const item of value) {
      const result = getFirstChild(item, predicate);
      if (result) return result;
    }
  }
  return null;
}

/**
 * Utility for resolving recursively nested JSX children in search of the first element that matches a predicate.
 * @param fn Accessor of JSX children
 * @param predicate predicate to filter elements.
 * ```ts
 * // default predicate
 * (item: JSX.Element): item is Element => item instanceof Element
 * ```
 * @returns Signal of a single found element or `null` if no elements were found
 * ```ts
 * Accessor<T | null>
 * ```
 * @example
 * ```tsx
 * function Button(props: ParentProps) {
 *  const child = resolveFirst(() => props.children)
 *  return <div>{child()?.localName}: {child()}</div>
 * }
 * ```
 */
export function resolveFirst(fn: Accessor<JSX.Element>): Accessor<Element | null>;
export function resolveFirst<T extends object>(
  fn: Accessor<JSX.Element>,
  predicate: (item: JSX.Element | T) => item is T,
): Accessor<T | null>;
export function resolveFirst(
  fn: Accessor<JSX.Element>,
  predicate = (item: JSX.Element | Element): item is Element => item instanceof Element,
): Accessor<any | null> {
  const children = createMemo(fn);
  return createMemo(() => getFirstChild(children(), predicate));
}

/**
 * Reactive signal that filters out non-element items from a signal array.
 * @param fn Array signal
 * @returns Array signal
 * @example
 * const resolved = children(() => props.children);
 * const refs = elements(resolved);
 * refs() // T: Element[]
 * // or narrow down type of the Element
 * const refs = elements(resolved, HTMLElement);
 * refs() // T: HTMLElement[]
 */
export function elements<S>(fn: Accessor<Many<S>>): Accessor<ExtractIfPossible<S, Element>[]>;
export function elements<S, T extends (typeof Element)[]>(
  fn: Accessor<Many<S>>,
  ...types: T
): Accessor<ExtractIfPossible<S, InstanceType<T[number]>>[]>;
export function elements(fn: Accessor<any>, ...types: (typeof Element)[]): Accessor<Element[]> {
  return createMemo(() => filterInstance(asArray(fn()), ...(types.length ? types : [Element])));
}

/**
 * Solid's `children` helper in component form. Access it's children elements by `get` property.
 * @property `get` – get resolved elements, fired every time the children change
 * @example
 * ```tsx
 * const [children, setChildren] = createSignal<ResolvedJSXElement>();
 *
 * <Children get={setChildren}>
 *    <div></div>
 *    ...
 * </Children>
 * ```
 */
export function Children(props: {
  get: (resolved: ResolvedChildren) => void;
  children: JSX.Element;
}): JSX.Element {
  const resolved = children(() => props.children);
  createComputed(on(resolved, props.get));
  onCleanup(() => props.get(undefined));
  return resolved;
}

import EventListenersPair from './event-listeners-pair';

const allListeners = new WeakMap<HTMLElement, EventListenersPair>();

export function rememberListeners(
    element: HTMLElement,
    pair: EventListenersPair
): void {
    allListeners.set(element, pair);
}

export function forgetListeners(
    element: HTMLElement
): EventListenersPair | null {
    const pair = allListeners.get(element) ?? null;
    allListeners.delete(element);
    return pair;
}
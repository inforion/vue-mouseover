export default function extractLastElement<T>(
    array: T[]
): { last: T; rest: T[] } {
    if (array.length === 0) {
        throw new Error('Cannot remove last element from empty array');
    }

    const last = array.pop() as T;
    return { last, rest: array };
}
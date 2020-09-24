// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ObjectTree extends Record<string, ObjectTree | undefined> { }

function get(
    object: Record<string, unknown>,
    path: string[],
    defaultValue: unknown = undefined
): unknown {
    const value = path.reduce(
        (accumulator, key) => (accumulator != null ? accumulator[key] : accumulator),
        object as ObjectTree | undefined
    );

    return value === undefined || value === object
        ? defaultValue
        : value;
}

export default function getOrKeep(
    object: Record<string, unknown>,
    path: string[]
): unknown {
    return path.length === 0
        ? object
        : get(object, path);
}
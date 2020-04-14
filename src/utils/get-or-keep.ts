import get from 'lodash.get';

export default function getOrKeep(
    object: object,
    path: string[]
): unknown {
    return path.length === 0
        ? object
        : get(object, path);
}
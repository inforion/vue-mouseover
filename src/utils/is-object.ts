export default function isObject(value: unknown): value is {} {
    return typeof value === 'object' && value != null && !Array.isArray(value);
}

export function isObjectNonStrict(value: unknown): value is Record<string, unknown> {
    return isObject(value);
}
const charCodeOfDot = '.'.charCodeAt(0);
const escapeCharRegex = /\\(\\)?/g;
const propertyNameRegex = new RegExp(
    // Match anything that isn't a dot or bracket.
    '[^.[\\]]+'
    + '|'
    // Or match property names within brackets.
    + '\\[(?:'
    // Match a non-string expression.
    + '([^"\'][^[]*)'
    + '|'
    // Or match strings (supports escaping characters).
    + '(["\'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2'
    + ')\\]'
    + '|'
    // Or match "" as the space between consecutive dots or empty brackets.
    + '(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|$))',
    'g'
);

export default function stringToPath(
    string: string
): Array<string> {
    const result = [];

    if (string.charCodeAt(0) === charCodeOfDot) {
        result.push('');
    }

    // Allows easy iterating across matches using old JavaScript ability
    string.replace(
        propertyNameRegex,
        (match, expression, quote, subString) => {
            let key = match;

            if (quote) {
                key = subString.replace(escapeCharRegex, '$1');
            } else if (expression) {
                key = expression.trim();
            }

            result.push(key);
            return '';
        }
    );

    return result;
}
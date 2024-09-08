export function maskMiddle(str) {
    if (str.length <= 2) {
        return str;
    }

    const firstChar = str[0];
    const lastChar = str[str.length - 1];

    const stars = '*'.repeat(str.length - 2);

    return firstChar + stars + lastChar;
}
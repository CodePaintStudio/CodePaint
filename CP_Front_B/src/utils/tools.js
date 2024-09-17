export function maskMiddle(str) {
    if (str.length <= 2) {
        return str;
    }

    const firstChar = str[0];
    const lastChar = str[str.length - 1];

    const stars = '*'.repeat(str.length - 2);

    return firstChar + stars + lastChar;
}

export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function clearObj (values) {
    return Object.fromEntries(
        Object.entries(values).filter(([key, value]) => value)
    );
}
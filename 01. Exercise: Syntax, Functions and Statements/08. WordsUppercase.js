function solve(string) {
    return string
        .split(/\W+/)
        .filter((w) => w.length > 0)
        .join(', ')
        .toUpperCase();
}

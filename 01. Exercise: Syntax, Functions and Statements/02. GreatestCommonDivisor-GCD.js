function solve(a, b) {
    return b ? solve(b, a % b) : a;
}

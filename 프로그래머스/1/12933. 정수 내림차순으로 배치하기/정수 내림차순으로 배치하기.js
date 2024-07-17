function solution(n) {
    return Number(String(n).split("").map(value => +value).sort((a, b) => b - a).join(""));
}

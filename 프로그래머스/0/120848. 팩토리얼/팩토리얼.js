function solution(n) {
    let result = 0;
    let initialValue = 1;

    while (initialValue <= n) {
        result++;
        initialValue *= result;
    }

    return result - 1;
}
function solution(a, b) {
    let result = 0;

    for(let i = 0; i <= a.length -1; i++) {
        result += a[i] * b[i]
    }

    return result;
}
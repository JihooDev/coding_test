function solution(n) {
    let result = '';
    for (let i = 1; i <= n; i++) {
        let text = i % 2 === 0 ? '박' : '수';

        result += text;
    }

    return result;
}
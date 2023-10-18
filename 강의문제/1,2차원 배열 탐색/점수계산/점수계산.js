function solution(arr) {
    // 최종 결과값
    let result = 0;
    // 정답 일 시 값을 증가 할 값
    let count = 0;

    for (let x of arr) {
        // 1이면 정답이니 count추가해주고 result에 값 넣기
        if (x === 1) {
            count++;
            result += count;
        }

        // 아니면 count 초기화
        if (x === 0) {
            count = 0;
        }
    }

    return result;
}
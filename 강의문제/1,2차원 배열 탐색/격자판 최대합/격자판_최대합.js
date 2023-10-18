function solution(arr) {
    // 최대 값을 출력할 값
    let result = Number.MIN_SAFE_INTEGER;
    let length = arr.length;
    let sum1 = 0;
    let sum2 = 0;

    // 열과 행 구하는 루프
    for (let i = 0; i < length; i++) {
        // 루프 돌 때 마다 sum1과 sum2 초기화
        sum1 = 0;
        sum2 = 0;

        for (let j = 0; j < length; j++) {
            // sum1에 열 할당
            // [0][0] / [0][1] / [0][2] ...
            sum1 += arr[i][j];

            // sum2에 행 할당
            // [1][0] / [2][0] / [3][0]
            sum2 += arr[j][i];
        }

        // result 최대값 초기화
        result = Math.max(result, sum1, sum2);
    }

    sum1 = 0;
    sum2 = 0;

    // 대각선 값 구하기
    for (let i = 0; i < length; i++) {
        sum1 += arr[i][i];
        sum2 += arr[i][length - i - 1];
    }

    result = Math.max(result, sum1, sum2);

    return result;
}
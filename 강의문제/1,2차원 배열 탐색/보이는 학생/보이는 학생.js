function solution(arr) {
    // 첫번째 학생은 무조건 보여야 하기 때문에 초기값 1
    let count = 1;
    // 비교해야 할 대상 (최대 값을 담을 변수)
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        // 배열의 요소가 max보다 크면
        if (arr[i] > max) {
            // 카운트 증가
            count++;
            // max를 현재 값으로 초기화
            max = arr[i];
        }
    }

    return count;
}
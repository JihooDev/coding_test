function solution(arr) {
    // 첫번째 요소는 무조건 담는다.
    let result = [arr[0]];

    for (let i = 1; i < arr.length; i++) {
        // 현재 요소와 현재 요소의 -1 index (이전 요소) 와 비교하여 현재 요소가 크면 result 배열에 담는다.
        if (arr[i] > arr[i - 1]) result.push(arr[i]);
    }

    return result;
}
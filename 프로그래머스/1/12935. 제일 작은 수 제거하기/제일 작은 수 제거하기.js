function solution(arr) {
    if (arr.length === 1) {
        return [-1];
    }

    let targetNums = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (targetNums > arr[i]) {
            targetNums = arr[i];
        }
    }

    return arr.filter((val, index) => val !== targetNums);
}
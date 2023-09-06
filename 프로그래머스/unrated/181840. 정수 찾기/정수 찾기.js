function solution(num_list, n) {
    let result = num_list.find((item) => (item === n ? 1 : 0));

    return result ? 1 : 0;
}
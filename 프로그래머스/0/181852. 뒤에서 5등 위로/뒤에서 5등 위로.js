function solution(num_list) {
    return num_list.sort((a, b) => {
        return a - b;
    }).slice(5, num_list.length);
}
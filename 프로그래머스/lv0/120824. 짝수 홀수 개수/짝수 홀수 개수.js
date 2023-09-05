function solution(num_list) {
    let result = [
        num_list.filter((i) => i % 2 === 0).length,
        num_list.filter((i) => i % 2 != 0).length
    ];
    
    return result;
}
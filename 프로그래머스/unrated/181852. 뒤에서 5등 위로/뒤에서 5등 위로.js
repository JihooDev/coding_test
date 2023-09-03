function solution(num_list) {
    const sortArr = num_list.sort((a,b) => a - b);
    
    return sortArr.slice(5, sortArr.length);
}
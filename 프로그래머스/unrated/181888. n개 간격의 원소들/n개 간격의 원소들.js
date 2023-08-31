function solution(num_list, n) {
  let result = [];

  num_list.forEach((item,idx) => {
    if(idx % n <= 0) {
      result.push(item);
    }
  })

  return result;
}
function solution(arr) {
  let result = [];
  arr.forEach((item) => {
    for(let i = 1; i <= item; i++) {
      result.push(item);
    }
  })

  return result;
}
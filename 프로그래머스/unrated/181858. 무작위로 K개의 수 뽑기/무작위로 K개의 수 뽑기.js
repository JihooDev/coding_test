function solution(arr, k) {
  let result = [];


  arr.forEach(num => {
    if(!result.includes(num) && result.length < k) {
      result.push(num)
    }
  })

  if(result.length < k) {
    for(let i = result.length; i < k; i++) {
      result.push(-1);
    }
  }

  return result;
}
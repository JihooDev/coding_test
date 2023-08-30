function solution(n, k) {
  let result = [];
  for(let i = k; i <= n; i++) {
    if(i % k === 0) {
      result.push(i);
    }
  }

  return result;
}
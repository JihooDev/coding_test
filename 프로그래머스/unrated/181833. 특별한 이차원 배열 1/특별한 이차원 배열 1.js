function solution(n) {
  let result = [];

  for(let i = 0; i < n; i++) {
    result.push(Array(n).fill(0));
  }

  for(let j = 0; j < result.length; j++) {
    result[j][j] = 1;
  }

  return result;
}
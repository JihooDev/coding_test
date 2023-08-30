function solution(x, n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    let num = x * i;
    result.push(num);
  }

  return result;
}
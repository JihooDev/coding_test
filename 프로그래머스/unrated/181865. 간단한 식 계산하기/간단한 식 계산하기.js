function solution(binomial) {
  const arr = binomial.split(' ');

  let operation = {
    "+" : (a,b) => a + b,
    "-" : (a,b) => a - b,
    "*" : (a,b) => a * b
  }

  return operation[arr[1]](+arr[0],+arr[2]);
}
function solution(ineq, eq, n, m) {
  const symbol = ineq+eq;
  
  const operation = {
    "<=" : (a,b) => a <= b,
    ">=" : (a,b) => a >= b,
    ">!" : (a,b) => a > b,
    "<!" : (a,b) => a < b
  }

  return operation[symbol](n,m) ? 1 : 0
}
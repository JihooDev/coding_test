function solution(n) {
  let str = String(n);
  let arr = str.split("").map(Number);

  let result = arr.reduce((a, i) => {
     return a + i;
  });
    
    return result;
}
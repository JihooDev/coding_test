function solution(n) {
  const arr = String(n).split("");
  let result = 0;

  arr.map((item) => {
    result += parseInt(item);
  });

  return result;
}
function solution(n) {
  let result = [];

  for (let i = 1; i <= n; i++) {
    if (i % 2 === 1) {
      result.push("수");
    } else {
      result.push("박");
    }
  }

  return result.join("");
}
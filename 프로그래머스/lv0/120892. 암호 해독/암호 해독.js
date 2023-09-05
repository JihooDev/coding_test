function solution(cipher, code) {
  const toArr = cipher.split("");
  let result = [];

  for (let i = 0; i <= toArr.length; i++) {
    if (Number.isInteger(i / code)) {
      result.push(toArr[i - 1]);
    }
  }

  return result.join("");
}
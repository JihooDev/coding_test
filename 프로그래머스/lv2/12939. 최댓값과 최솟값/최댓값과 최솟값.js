function solution(s) {
const sArr = s.split(" ").sort((a,b) => +a - +b);

  return`${sArr[0]} ${sArr[sArr.length -1]}`
}
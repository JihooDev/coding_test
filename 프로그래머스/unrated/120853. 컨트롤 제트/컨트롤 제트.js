function solution(s) {
  const sArr = s.split(" ");
  let sum = 0;

  for(let i = 0; i < sArr.length; i++) {
    if(sArr[i] === 'Z') {
      sum = sum - sArr[i - 1];
    } else {
      sum+=+sArr[i];
    }
  }

  return sum;
}

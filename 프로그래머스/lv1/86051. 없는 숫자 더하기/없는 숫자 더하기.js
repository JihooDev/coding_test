function solution(numbers) {
  let allNum = 0;
  const arrTotal = numbers.reduce((a,b) => a + b);

  for(let i = 0; i<=9; i++) {
    allNum += i;
  }

  return allNum - arrTotal
}
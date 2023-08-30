function solution(n) {
  let i = 1;
  while (true) {
    i++;
    if (n % i === 1) {
      console.log(i);
      return i;
    }
  }
}
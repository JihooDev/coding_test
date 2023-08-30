function solution(myString, pat) {
  const upperMyString = myString.toUpperCase();

  
  return upperMyString.includes(pat.toUpperCase()) ? 1 : 0;
}
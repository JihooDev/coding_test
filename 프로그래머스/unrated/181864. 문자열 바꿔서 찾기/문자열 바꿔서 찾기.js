function solution(myString, pat) {
  const changeValue = [...myString].map(str => str === 'A' ? 'B' : 'A').join('');

  return ~~changeValue.includes(pat);
}
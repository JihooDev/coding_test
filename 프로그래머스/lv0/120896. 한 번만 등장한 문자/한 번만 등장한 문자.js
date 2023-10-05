function solution(s) {
  let checkObj = {};

  for(let i=0; i<=s.length-1; i++) {
    if(checkObj[s[i]]) {
      checkObj[s[i]]++;
    } else {
      checkObj[s[i]] = 1;
    }
  }

  let result = '';

  for (let i in checkObj) {
    if(checkObj[i] === 1) result+=i
  }

  return [...result].sort().join('')
}
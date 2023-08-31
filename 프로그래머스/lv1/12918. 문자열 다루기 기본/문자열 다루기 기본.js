function solution(s) {
  const sArr = [...s];
if(s.length === 4 || s.length === 6){
  for(let i = 0; i <= sArr.length - 1; i++) {
    if(isNaN(Number(sArr[i]))) {
      return false;
    }
  }
} else {
    return false;
}

  return true;
}



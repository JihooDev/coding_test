function solution(myString) {
  let result = '';
  let codeNum = "l".charCodeAt(); // 108

  for(let i = 0; i < myString.length; i++) {
    const codeForVal = myString[i].charCodeAt();

    if(codeForVal < codeNum) {
      result+='l';
    } else {
      result+=myString[i];
    }
  }

  return result;
}
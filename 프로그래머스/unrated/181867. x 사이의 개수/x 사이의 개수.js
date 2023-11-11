function solution(myString) {
  const strArr = myString.split('x');
  let result = [];

  strArr.forEach(str => {
    result.push(str.length);
  })
  
  return result;
}
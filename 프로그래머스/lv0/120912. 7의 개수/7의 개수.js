function solution(array) {
  let result = 0;

  array.forEach(val => {
    const valArr = String(val).split("");

    for(let i = 0; i <= valArr.length; i++) {
      if(valArr[i] === '7') result+=1;
    }
  })
  return result;
}
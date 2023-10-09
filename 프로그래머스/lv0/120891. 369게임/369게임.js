function solution(order) {
  let result = 0;

  for(let i = 0; i < String(order).length; i++) {
    let toStr = String(order)[i];

    if(toStr === '3' || toStr === '6' || toStr === '9') {
      result+=1;
    }
  }

  return result;
}
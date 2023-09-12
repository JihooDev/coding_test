function solution(strArr) {
  const result = strArr.map((item,index) => {
    if(index % 2 !== 0) {
      return item.toUpperCase();
    } else {
      return item.toLowerCase();
    }
  })

  return result;
}
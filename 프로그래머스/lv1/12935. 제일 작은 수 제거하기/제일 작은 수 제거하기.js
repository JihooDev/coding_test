function solution(arr) {
  const minNum = Math.min(...arr);

  const filterArr = arr.filter(item => item !== minNum);

  if(filterArr.length === 0) return [-1];

  return filterArr;
}
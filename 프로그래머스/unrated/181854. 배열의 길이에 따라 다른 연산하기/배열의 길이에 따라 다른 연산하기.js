function solution(arr, n) {
  // 길이가 짝수 일 시
  if(arr.length % 2 === 0)  {
    return arr.map((item,idx) => {
      if(idx % 2 !== 0) {
        return item = item + n
      } else {
        return item;
      }
    })
  }

  // 길이가 홀수 일 시
  if(arr.length % 2 !== 0)  {
    return arr.map((item,idx) => {
      if(idx % 2 === 0) {
        return item = item + n
      } else {
        return item;
      }
    })
  }
}
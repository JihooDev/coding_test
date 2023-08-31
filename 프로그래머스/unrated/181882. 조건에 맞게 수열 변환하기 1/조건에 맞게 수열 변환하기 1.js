function solution(arr) {
  arr.forEach((item,idx) => {
    if(item >= 50 && item % 2 === 0) {
      arr[idx] = item / 2
    }

    if(item < 50 && item % 2 !== 0) {
      arr[idx] = item * 2
    }
  })

  return arr
}
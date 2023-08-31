function solution(arr, k) {
  arr.forEach((item,idx) => {
      arr[idx] = k % 2 ===0 ? item + k : item * k
  })

  return arr
}
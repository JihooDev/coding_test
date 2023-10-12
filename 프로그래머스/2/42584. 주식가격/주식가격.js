function solution(prices) {
  const stack = [], result = Array(prices.length).fill(0).map((_,idx)=>idx).reverse()
  const visited = []

  prices.forEach((price,idx)=>{
      const sLastIdx = stack.length-1

      if(price < stack[sLastIdx]){
          let backTrackingIdx = 0
          while(price < stack[sLastIdx-backTrackingIdx]){
              if(!visited[sLastIdx-backTrackingIdx]){
                  result[sLastIdx-backTrackingIdx] -= (prices.length-1-idx)
                  visited[sLastIdx-backTrackingIdx] = true
              }
              backTrackingIdx++
          }
      }
      stack.push(price)
  })
  return result
}
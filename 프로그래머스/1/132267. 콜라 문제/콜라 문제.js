function solution(a, b, n) {
  const getBottle = (bottleCount,colaCount,a,b)=>{
    if(bottleCount / a < 1){
        return colaCount
    } 
    const newBottleCount = Math.floor(bottleCount / a) * b
    const leftBottleCount = bottleCount % a

    return getBottle(newBottleCount+leftBottleCount,colaCount+newBottleCount,a,b)
 }

 const result = getBottle(n,0,a,b);

 return result;
}
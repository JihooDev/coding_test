function solution(rsp) {
  let result = '';

  const winWayObj = {
    "2" : "0",
    "0" : "5",
    "5" : "2"
  }

   for(let i = 0; i <= rsp.length-1; i++) {
     result+=winWayObj[rsp[i]];
   }

   return result;
}
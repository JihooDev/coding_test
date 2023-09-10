function solution(num_list) {
  let oddNum = 0;
  let evenNum = 0;

  num_list.forEach((item,index) => {
    if(index % 2 === 0) {
      evenNum+=item;
    } else {
      oddNum+=item;
    }
  })

  if(evenNum === oddNum) return evenNum;

  return evenNum > oddNum ? evenNum : oddNum
}
function solution(str_list, ex) {
let result = [];

  str_list.map(item => {
    if(!item.includes(ex)) {
      result.push(item);
    } 
  })

  return result.join("")
}
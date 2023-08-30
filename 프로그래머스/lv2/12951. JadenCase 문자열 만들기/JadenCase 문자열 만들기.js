function solution(s) {
  let toArr = s.toLowerCase().split(' ');
  let result = [];
  
  toArr.forEach((item) => {
    result.push(item.charAt(0).toUpperCase() + item.substr(1));
  })

  return result.join(' ');
}
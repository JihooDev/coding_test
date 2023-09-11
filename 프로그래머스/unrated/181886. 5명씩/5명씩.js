function solution(names) {
  let results = [];

  names.forEach((item,index) => {
    if(index % 5 === 0) {
      results.push(item);
    }
  })

  return results;
}
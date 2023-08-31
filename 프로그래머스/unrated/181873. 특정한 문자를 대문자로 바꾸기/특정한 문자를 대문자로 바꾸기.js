function solution(my_string, alp) {
  const result = [...my_string]
  
  result.forEach((item,idx) => {
    if(item === alp) {
      result[idx] = item.toUpperCase();
    }
  })

  return result.join('');
}
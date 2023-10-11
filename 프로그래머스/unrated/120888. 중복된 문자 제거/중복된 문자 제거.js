function solution(my_string) {
  let result = [...new Set([...my_string])];

  return result.join('');
}
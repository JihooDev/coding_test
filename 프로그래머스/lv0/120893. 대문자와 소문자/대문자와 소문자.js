function solution(my_string) {
  const toArr = my_string.split("");
  let result = [];

  toArr.map((item) => {
    if (item === item.toUpperCase()) {
      result.push(item.toLowerCase());
    } else {
      result.push(item.toUpperCase());
    }
  });

  return result.join('');
}
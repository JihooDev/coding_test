function solution(my_strings, parts) {
  let result = '';

  for(let i = 0; i < my_strings.length; i++) {
    let str = '';

    for(let j = parts[i][0]; j <= parts[i][1]; j++) {
      str += my_strings[i][j];
    }

    result+=str;
  }

  return result;
}
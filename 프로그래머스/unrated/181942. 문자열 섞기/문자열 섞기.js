function solution(str1, str2) {
  let result = '';

  for(let i = 0; i <= str1.length -1; i++) {
    let addStr = str1[i] + str2[i];

    result+=addStr;
  }

  return result;
}
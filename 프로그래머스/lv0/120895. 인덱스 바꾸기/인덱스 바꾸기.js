function solution(my_string, num1, num2) {
    return [...my_string].map((str,index) => {
    if(index === num1) return [...my_string][num2];
    if(index === num2) return [...my_string][num1];
    return str;
  }).join('')
}
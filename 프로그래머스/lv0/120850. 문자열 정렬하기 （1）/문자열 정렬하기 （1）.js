function solution(my_string) {
  return my_string
    .split("")
    .map(str => +str)
    .filter(str => !Number.isNaN(str))
    .sort((a, b) => a - b);
}
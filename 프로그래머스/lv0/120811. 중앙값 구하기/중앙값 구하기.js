function solution(array) {
    let result = array.sort((a, b) => a - b);

  return result[~~(result.length / 2)];
}
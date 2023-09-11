function solution(answers) {
  // 반복되는 숫자만 배열에 담기
  const firstStudent = [1, 2, 3, 4, 5];
  const secondStudent = [2, 1, 2, 3, 2, 4, 2, 5];
  const thirdStudent = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  // result 초기 값 설정
  const sumArr = [0, 0, 0];
  for (let i = 0; i < answers.length; i++) {
    if (firstStudent[i % firstStudent.length] === answers[i]) sumArr[0]++;
    if (secondStudent[i % secondStudent.length] === answers[i]) sumArr[1]++;
    if (thirdStudent[i % thirdStudent.length] === answers[i]) sumArr[2]++;
  }
  const maxValue = Math.max(...sumArr);
  let count = 0;
  let result = [];

  for (let i = 0; i < 3; i++) {
    if (maxValue === sumArr[i]) {
      result[count] = i + 1;
      count++;
    }
  }

  return result;
}
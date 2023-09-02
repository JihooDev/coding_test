function solution(arr1, arr2) {
  let results = [];

  for(let i = 0; i <= [...arr1].length - 1; i++) {
    const sumArr = [];
    for(let j = 0; j <= arr1[i].length - 1; j++) {
      sumArr.push(arr1[i][j] + arr2[i][j]);
    }

    results.push(sumArr);
  }

  return results;
}
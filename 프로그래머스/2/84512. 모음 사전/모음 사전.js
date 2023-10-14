const dfs = (word,length,result) => {
  const wordArr = [..."AEIOU"];
  if (length === word.length) {
    result.push(word);
    return;
  }

  wordArr.forEach((vowel) => {
    dfs(word + vowel, length, result);
  });
}

function solution(word) {
  const result = [];
  const str = "";
  for (let i = 1; i <= 5; i++) dfs(str, i, result);

  return result.sort().indexOf(word) + 1;
}
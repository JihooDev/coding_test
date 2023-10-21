function solution(score) {
  const length = score.length;
  let result = [];
  let rank = 1;

  for(let i = 0; i < length; i++) {
      for(let j = 0; j < length; j++) {
        if((score[i][0]+score[i][1]) < (score[j][0]+score[j][1])){
          rank++;
      } else if((score[i][0]+score[i][1]) == (score[j][0]+score[j][1])){
          continue;
      } 
    }

    result.push(rank);
    rank = 1;
  }

  return result;
}
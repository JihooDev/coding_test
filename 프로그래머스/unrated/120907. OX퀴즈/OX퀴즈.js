function solution(quiz) {
  const result = quiz.map((q)=>{
    const [left,right] = q.split('=');

    if(left.indexOf('+') > -1){
        const [leftValue1,leftValue2] = left.split(' + ').map(v=>Number(v))
        return leftValue1 + leftValue2 === Number(right) ? 'O' : 'X'
    }
    else{
        const [leftValue1,leftValue2] = left.split(' - ').map(v=>Number(v))
        return leftValue1 - leftValue2 === Number(right) ? 'O' : 'X'
    }
  })

  return result;
}

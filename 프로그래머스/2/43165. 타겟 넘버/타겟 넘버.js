function solution(numbers, target) {

  let result = 0;

  dfs(0,0);
  
  function dfs(sum,index) {
    // 재귀의 종료점
    if(numbers.length === index){
      if(sum === target) result+=1;
      return;
    }

    dfs(sum+numbers[index],index+1);
    dfs(sum-numbers[index],index+1);
  }

  return result;
}
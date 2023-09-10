function solution(num_list) {
  for(let i = 0; i <= num_list.length-1; i++) {
    if(num_list[i] < 0) {
      return i;
    }
  }

  return -1;
}
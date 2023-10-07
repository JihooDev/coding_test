function solution(num_list, n) {
  const frontArr = num_list.slice(0,n);
  const endArr = num_list.slice(n,num_list.length);

  return [...endArr,...frontArr]
}
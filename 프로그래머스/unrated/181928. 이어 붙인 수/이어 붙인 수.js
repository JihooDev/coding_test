function solution(num_list) {
  let first = [];
  let second = [];

  num_list.filter((item) => {
    item % 2 !== 0 ? first.push(item) : second.push(item);
  });

  return Number(first.join("")) + Number(second.join(""));
}
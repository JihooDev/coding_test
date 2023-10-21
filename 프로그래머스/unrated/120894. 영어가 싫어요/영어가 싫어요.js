function solution(numbers) {
  let result = '';
  let sumStr = '';

  const changeObj = {
    "zero" : 0,
    "one" : 1,
    "two" : 2,
    "three" : 3,
    "four" : 4,
    "five" : 5,
    "six" : 6,
    "seven" : 7,
    "eight" : 8,
    "nine" : 9
  }

  for(let i = 0; i<numbers.length; i++) {
    sumStr+=numbers[i];

    if(sumStr in changeObj) {
      result+=changeObj[sumStr];
      sumStr = '';
    }
  }

  return +result;
}
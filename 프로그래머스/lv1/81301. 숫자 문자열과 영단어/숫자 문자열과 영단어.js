function solution(s) {
  const sArr = s.split('');
  const result = [];
  let str = ''

  const toNumber = (str) => {
    switch(str) {
      case "zero" : return 0;
      case "one" : return 1;
      case "two" : return 2;
      case "three" : return 3;
      case "four" : return 4;
      case "five" : return 5;
      case "six" : return 6;
      case "seven" : return 7;
      case "eight" : return 8;
      case "nine" : return 9;
      default : return false;
    }
  }

  sArr.forEach(item => {
    if(!isNaN(item)){
      result.push(+item);
      str = ''
    } else {
      str += item
      if(toNumber(str) !== false) {
        result.push(+toNumber(str));
        str = '';
      }
    }
  })

  return Number(result.join(""));
}
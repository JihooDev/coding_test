function solution(strArr) {
      let result = [];

      strArr.forEach(str => {
        if(str.search('ad') === -1) result.push(str);
      })

      return result;
}
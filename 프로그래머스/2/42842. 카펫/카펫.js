function solution(brown, yellow) {
  for (let i = 3; i <= (brown+yellow)/i; i++) {
      let width = Math.floor((brown+yellow)/i);
      if( (width-2)*(i-2)=== yellow) {
          return [width,i];
      }
  }
    
    return []
}
function solution(s) {    
    var answer = '';
    
    if(s <= 0) {
        var minus = parseInt(s);
        answer = minus;
    } 
    
    if(s > 0) {
        var plus = parseInt(s);
        answer = plus;
    }
    
    return answer;
}
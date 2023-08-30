function solution(numbers) {
    const result = numbers.sort((a,b) => b - a);
    
    return result[0] * result[1];
}
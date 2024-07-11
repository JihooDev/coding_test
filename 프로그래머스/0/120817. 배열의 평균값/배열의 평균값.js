function solution(numbers) {
    const result = numbers.reduce((a,b,c) => a + b) / numbers.length;
    
    return result;
}
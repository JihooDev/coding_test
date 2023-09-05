function solution(numbers) {
    const result = numbers.reduce((a, b) => a + b) / numbers.length;

    return result;
}
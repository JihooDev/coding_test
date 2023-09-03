function solution(arr) {
    let result = arr.reduce((a,b) => {return (a + b)});
    return result / arr.length
}
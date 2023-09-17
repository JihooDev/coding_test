function solution(number) {
    let numberArr = number.split('');

    const sumResult = numberArr.reduce((a,b) => +a + +b);

    return sumResult % 9;
}
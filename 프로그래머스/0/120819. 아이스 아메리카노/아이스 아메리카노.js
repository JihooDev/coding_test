function solution(n) {
    const AMERICANO_PRICE = 5500;
    let result = [
        Math.floor(n / AMERICANO_PRICE),
        n % AMERICANO_PRICE
    ];

    return result;
}
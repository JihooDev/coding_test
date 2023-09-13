function solution(n, k) {
  const sheep = 12000 * n;
  const drink = 2000 * (n / 10 >= 1 ? k - parseInt(n / 10) : k);
  let defaultPrice = sheep + drink;

  return defaultPrice;
}
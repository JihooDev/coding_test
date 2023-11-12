function solution(chicken) {
  let coupon = chicken;
  let serviceChickenSum = 0;

  while(coupon >= 10){
      const newChickenService = ~~(coupon/10)
      serviceChickenSum += newChickenService
      coupon = coupon % 10 + newChickenService
  }
  return serviceChickenSum

}
function solution(num_list) {
    let mul = num_list.reduce((a, c) => {return a*c ;}, 1);
    let sum = num_list.reduce((a, c) => {return a+c ;}, 0);
    return (mul < sum*sum) ? 1 : 0;
}
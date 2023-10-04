function solution(num, k) {
    return [...String(num)].indexOf(String(k))+1 !== 0 ? [...String(num)].indexOf(String(k))+1 : -1
}
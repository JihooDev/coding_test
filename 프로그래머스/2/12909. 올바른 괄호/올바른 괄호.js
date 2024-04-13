function solution(s) {
    let stack = [];

    if (s[0] === ')' || s[s.length - 1] === '(') return false;

    [...s].forEach(item => {
        if (item === ')') {
            stack.pop();
        } else {
            stack.push(item);
        }
    })

    return stack.length === 0
}
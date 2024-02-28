function solution(operations) {
    var answer = [];
    operations.forEach(v => {
        const [op, num] = v.split(' ');

        if (op === 'I')
            answer.push(parseInt(num));
        if (op === 'D') {
            if (num == 1) answer.splice(answer.indexOf(Math.max(...answer)), 1);
            if (num == -1) answer.splice(answer.indexOf(Math.min(...answer)), 1);
        }
    })
    return [Math.max(...answer) | 0, Math.min(...answer) | 0];
}

function solution(begin, target, words) {
    const visited = { [begin]: 0 };
    const queue = [begin];

    while (queue.length) {
        const current = queue.shift();

        if (current === target) break;

        words.forEach(value => {
            if (isConnected(value, current) && !visited[value]) {
                visited[value] = visited[current] + 1;
                queue.push(value)
            }
        })
    }

    const result = visited[target] ?? 0;

    return result;
}

const isConnected = (str1, str2) => {
    let count = 0;
    const len = str1.length;

    for (let i = 0; i < len; i++) {
        if (str1[i] !== str2[i]) count++;
    }

    return count === 1 ? true : false;
}
function solution(s) {
    const str = s.toLowerCase();
    let result = { p: 0, y: 0 };

    for (let i = 0; i <= str.length; i++) {
        if (result.hasOwnProperty(str[i])) {
            result[str[i]]++;
        }
    }

    return result.p === result.y;
}
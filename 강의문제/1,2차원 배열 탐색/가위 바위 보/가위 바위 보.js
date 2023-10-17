function solution(aArr, bArr) {
    let result = [];
    for (let i = 0; i < aArr.length; i++) {
        // a 와 b가 똑같은 것을 내면 비긴다 라는 의미로 'D' push
        if (aArr[i] === bArr[i]) result.push('D');
        // a가 이기는 상황만 'A' push
        else if (aArr[i] === 1 && bArr[i] === 3) result.push('A');
        else if (aArr[i] === 2 && bArr[i] === 1) result.push('A');
        else if (aArr[i] === 3 && bArr[i] === 2) result.push('A');
        // 아니면 모두 B가 이기는 것 이여서 'B' push
        else result.push('B');
    }

    return result;
}
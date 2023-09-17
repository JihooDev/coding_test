function solution(q, r, code) {
    let result = '';

    [...code].forEach((item,idx) => {
        if(idx % q === r) {
            result+=item
        }
    })

    return result;
}
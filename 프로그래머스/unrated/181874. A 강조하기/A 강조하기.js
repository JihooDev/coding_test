function solution(myString) {
    const str = myString.toLowerCase();
    let result = '';

    for(let i = 0; i <= myString.length-1; i++) {
        if(str[i] === 'a') {
            result+=str[i].toUpperCase()
        } else {
            result+=str[i];
        };
    }

    return result;
}
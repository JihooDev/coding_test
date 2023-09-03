function solution(n, control) {
    const controlArr = control.split('');

    controlArr.forEach((item,index) => {
        switch(item) {
            case "w" : return controlArr[index] = +1;
            case "s" : return controlArr[index] = -1;
            case "d" : return controlArr[index] = +10;
            case "a" : return controlArr[index] = -10;
            default : return 0;
        }
    })

    return controlArr.reduce((a,b) => a + b, n);
}
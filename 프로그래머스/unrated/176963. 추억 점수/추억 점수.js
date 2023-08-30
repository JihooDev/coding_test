function solution(name, yearning, photo) {
    let result = [];
    let currentObj = {};

    name.forEach((item, idx) => {
        currentObj[item] = yearning[idx];
    });

    photo.forEach((photoArr) => {
        let sum = 0;
        photoArr.forEach((photoName) => {
            currentObj[photoName] ? (sum += currentObj[photoName]) : (sum += 0);
        });

        result.push(sum);
    });

    return result;
}
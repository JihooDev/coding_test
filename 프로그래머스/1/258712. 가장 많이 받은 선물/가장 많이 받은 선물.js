function solution(friends, gifts) {
    const giftCount = new Map();
    const giftTable = new Array(friends.length).fill(0).map(() => new Array(friends.length).fill(0));
    const rankInfo = new Array(friends.length).fill(0);
    const nextMonth = new Array(friends.length).fill(0);
    friends.forEach((name,idx) => {
        giftCount.set(name, idx);
    })

    gifts.forEach((names) => {
        const [giver, receiver] = names.split(' ');

        giftTable[giftCount.get(giver)][giftCount.get(receiver)]++;
    })

    for (let i=0; i<friends.length; i++) {
        rankInfo[i] = giftTable[i].reduce((acc, cur) => acc += cur, 0)
        
        for (let j=0; j<friends.length; j++) {
            rankInfo[i] -= giftTable[j][i];       
        }
    }

    for (let i=0; i<friends.length; i++) {
        for (let j=i+1; j<friends.length; j++) {
            if (i===j) continue;
            if (giftTable[i][j] > giftTable[j][i]) nextMonth[i]++;
            if (giftTable[i][j] < giftTable[j][i]) nextMonth[j]++;
            if (giftTable[i][j] === giftTable[j][i]) {
                if (rankInfo[i] > rankInfo[j]) nextMonth[i]++
                if (rankInfo[i] < rankInfo[j]) nextMonth[j]++
            }
        }
    }
    
    return Math.max(...nextMonth);
}
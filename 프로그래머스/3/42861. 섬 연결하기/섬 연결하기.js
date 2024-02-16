function solution(n, costs) {
    var result = 0;
    var parent = [];
    for (let i = 0; i < n; i++) {
        parent.push(i);
    }
    costs.sort((a, b) => {
        return a[2] - b[2];
    })
    let count = 0;
    for (let i = 0; i < costs.length; i++) {
        var a = find(parent, costs[i][0]);
        var b = find(parent, costs[i][1]);
        var l = costs[i][2];
        if (a != b) {
            if (a < b) {
                parent[b] = a;
            } else {
                parent[a] = b;
            }
            count++;
            result += l;
        }
        if (count === n - 1) {
            break;
        }
    }


    return result;
}

function find(parent, a) {
    if (parent[a] === a) {
        return a;
    }
    return parent[a] = find(parent, parent[a]);
}
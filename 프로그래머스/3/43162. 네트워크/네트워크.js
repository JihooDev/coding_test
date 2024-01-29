function solution(n, computers) {
    let result = 0;
    const visited = [];

    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            dfs(i, visited, computers);
            result++;
        }
    }

    return result;
}

const dfs = (node, visited, computers) => {
    visited[node] = 1;

    for (let i = 0; i < computers.length; i++) {
        if (computers[node][i] === 1 && !visited[i]) {
            dfs(i, visited, computers);
        }
    }
}
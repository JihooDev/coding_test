function solution(tickets) {
    const graph = {};
    for (const [a, b] of tickets) {
        if (!graph[a]) {
            graph[a] = [];
        }
        graph[a].push(b);
    }

    for (const key in graph) {
        graph[key].sort((a, b) => a > b ? -1 : 1);
    }

    const stack = ['ICN'];
    const result = [];

    while (stack.length > 0) {
        const target = stack[stack.length - 1];
        if (graph[target] && graph[target].length > 0) {
            stack.push(graph[target].pop());
        } else {
            result.push(stack.pop());
        }
    }

    return result.reverse();
}
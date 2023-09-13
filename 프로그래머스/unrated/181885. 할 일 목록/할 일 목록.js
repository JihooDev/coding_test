function solution(todo_list, finished) {
  return todo_list.map((todo,index) => {
    return {todo, finished : finished[index]}
  }).filter(({finished}) => !finished).map(({todo}) => {
    return todo;
  });
}
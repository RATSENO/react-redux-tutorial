const TodoItem = ({ todo, onToggle, onRemove }) => {
  return (
    <div>
      <input
        type="checkbox"
        onClick={() => onToggle(todo.id)}
        checked={todo.done}
        readOnly={true}
      ></input>
      <span style={{ textDecoration: todo.done ? 'line-height' : 'none' }}>
        {todo.text}
      </span>
      <button onClick={() => onRemove(todo.id)}>삭제</button>
    </div>
  );
};

const Todos = ({
  input,
  todos,
  onChangeInput,
  onInsert,
  onToggle,
  onRemove,
}) => {
  const onSubmit = (e) => {
    e.preventDefault();
    onInsert(input);
    onChangeInput('');//등록 후 인풋 초기화
  };

  const onChange = e => onChangeInput(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
        value={input}
        onChange={onChange}
        ></input>
        <button type="submit">등록</button>
      </form>
      <div>
        {
            todos.map(todo=>(
                <TodoItem
                todo={todo}
                key={todo.id}
                onToggle={onToggle}
                onRemove={onRemove}
                ></TodoItem>
            ))
        }        
      </div>
    </div>
  );
};

export default Todos;

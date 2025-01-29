/* eslint-disable react/prop-types */
function TodoListItem({ todo, onDelete }) {
    return (
        <li>
            {todo.value}
            <button onClick={() => onDelete(todo.id)}>X</button>
        </li>
    );
}

export default TodoListItem;

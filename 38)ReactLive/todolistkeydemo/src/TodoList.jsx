import TodoListItem from "./TodoListItem";

/* eslint-disable react/prop-types */
function TodoList({ listOfTodos, onDeleteTodo }) {
    function deleteTodo(id) {
        console.log("Delete todo with id:", id);
        onDeleteTodo?.(id);
    }

    

    return (
        <ul>
            {listOfTodos?.map((todo) => {
                return (
                    <TodoListItem
                        key={todo.id}
                        todo={todo}
                        onDelete={deleteTodo}
                    />
                );
            })}
        </ul>
    );
}

export default TodoList;

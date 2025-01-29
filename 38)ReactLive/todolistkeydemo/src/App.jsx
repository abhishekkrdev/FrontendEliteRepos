import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function App() {
    const [todos, setTodos] = useState([{ id: 1, value: "Do Homework" }]);
    function deleteTodoById(id) {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    function onTodoFormSubmit(value) {
        if (value) {
            setTodos([...todos, { id: todos.length + 1, value }]);
        }
    }
    return (
        <>
            <TodoInput onSubmit={onTodoFormSubmit} />
            <TodoList listOfTodos={todos} onDeleteTodo={deleteTodoById} />
        </>
    );
}

export default App;

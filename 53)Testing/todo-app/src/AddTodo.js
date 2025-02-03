import React, { useState } from "react";

const AddTodo = ({ addTodo }) => {
    const [todo, setTodo] = useState("");
    const handleSubmmit = (e) => {
        e.preventDefault();
        if (todo.trim()) {
            addTodo(todo);
            setTodo("");
        }

        return (
            <form onSubmit={handleSubmmit}>
                <input
                    type="text"
                    value={todo}
                    placeholder="Add a new todo"
                    onChange={(e) => setTodo(e.target.value)}
                />
            </form>
        );
    };
};

export default AddTodo;

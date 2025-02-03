/* eslint-disable testing-library/prefer-screen-queries */

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoApp from "./TodoApp.test";

// 1. Import required libraries

// 2. Rendering the component

// 3. Write test cases

// 4. Simulate User Interaction

// 5. Making Assertions

//  Testing render TodoApp component

test("render TodoApp component", () => {
    const { getByText } = render(<TodoApp />);
    const linkElement = getByText(/Todo App/i);
    expect(linkElement).toBeInTheDocument();
});

test("adds a new todo item", () => {
    const { getByText, getByPlaceholderText } = render(<TodoApp />);
    const input = getByPlaceholderText(/Add a new todo/i);
    const button = getByText(/Add Todo/i);
    fireEvent.change(input, { target: { value: "Learn Jest" } });
    fireEvent.click(button);

    const newTodo = getByText(/Learn Jest/i);
    expect(newTodo).toBeInTheDocument();
});

// Testing for toggling a todo item
test("toggle todo item", () => {
    const { getByPlaceholderText, getByText } = render(<TodoApp />);
    const input = getByPlaceholderText(/Add a new todo/i);
    const button = getByText(/Add Todo/i);
    fireEvent.change(input, { target: { value: "Learn Jest" } });
    fireEvent.click(button);

    const newTodo = getByText(/Learn Jest/i);
    fireEvent.click(newTodo);
    expect(newTodo).toHaveStyle("text-decoration: line-through");
});

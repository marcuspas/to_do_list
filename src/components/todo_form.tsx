import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Todo } from './todo_item';

interface TodoFormProps {
    todos: Array<Todo>
    set_todos: React.Dispatch<React.SetStateAction<Todo[]>>
}

export const TodoForm = ({ todos, set_todos }: TodoFormProps) => {

    const [input_text, set_input_text] = useState("")

    /**
     * Checks if the new todo is valid. A valid todo has nonempty text and the text is not already
     * in the todos array.
     * 
     * @param {Todo} new_todo The todo to check
     * @returns {boolean} True if new_todo is valid, false otherwise
     */
    const is_todo_valid = (new_todo: Todo) => {
        if (new_todo.text === "") return false
        let is_valid = true
        todos.forEach((todo: Todo) => {
            if (todo.text.toUpperCase() === new_todo.text.toUpperCase()) is_valid = false
        })
        return is_valid
    }

    /**
     * Adds a todo to the todos with text from the form
     */
    const add_todo = () => {
        const new_todo: Todo = { text: input_text.trim(), is_checked: false }
        if (is_todo_valid(new_todo)) {
            const new_todos: Array<Todo> = []
            todos.forEach((todo: Todo) => new_todos.push(todo))
            new_todos.push(new_todo)
            set_todos(new_todos)
            set_input_text("")
        }
    }

    return (
        <Container className="custom-container">
            <input
                value={input_text}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => set_input_text(event.target.value)}
                type="text"
                placeholder="What's the plan for today?"
                className="section"
                maxLength={20}
                onKeyPress={(event: React.KeyboardEvent<HTMLInputElement>) => {
                    if (event.key === "Enter") add_todo()
                }}
            />
            <button
                onClick={add_todo}
                className="btn btn--add"
            >
                New
            </button>
        </Container>
    )
}
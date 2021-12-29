import React, { useState } from 'react';
import injectSheet from 'react-jss'
import { Todo } from '../TodoItem';
import { styles } from "./styles";

interface TodoFormProps {
    classes?: any
    todos: Array<Todo>
    set_todos: Function
}

export const TodoForm = injectSheet(styles)(({ classes, todos, set_todos }: TodoFormProps) => {

    const [input_text, set_input_text] = useState("")

    const is_todo_valid = (new_todo: Todo) => {
        if (new_todo.text === "") return false
        let is_valid = true
        todos.forEach((todo: Todo) => {
            if (todo.text.toUpperCase() === new_todo.text.toUpperCase()) is_valid = false
        })
        return is_valid
    }

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
        <div>
            <input
                value={input_text}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => set_input_text(event.target.value)}
                type="text"
                placeholder="What's the plan for today?"
                className={classes.section}
                maxLength={20}
            ></input>
            <button
                onClick={add_todo}
                className={`${classes.button} ${classes.button_add}`}>
                New
            </button>
        </div>
    )

})
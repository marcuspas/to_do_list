import { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { TodoForm } from './todo_form';
import { Todo, TodoItem } from './todo_item';

export const TodoList = () => {

    const [todos, set_todos] = useState<Array<Todo>>([])

    /**
     * Stores the todos array in local storage with key "todos"
     */
    const store_todos = () => localStorage.setItem("todos", JSON.stringify(todos))

    /**
     * Gets the todos from local storage
     */
    const load_todos = () => {
        const saved_todos = localStorage.getItem("todos")
        set_todos(saved_todos === null ? [] : JSON.parse(saved_todos))
    }

    // Loads the todos on component mount
    useEffect(load_todos, [])

    // Stores the todos when a change is detected
    useEffect(store_todos, [todos])

    return (
        <Container>
            <h1>To Do List</h1>
            <TodoForm todos={todos} set_todos={set_todos} />
            {todos.map((todo: Todo, i: number) => (
                <Row
                    key={`todo-${i}`}>
                    <TodoItem
                        todo={todo}
                        todos={todos}
                        set_todos={set_todos}
                    />
                </Row>
            ))}
        </Container>
    )
}
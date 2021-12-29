import { useState } from 'react';
import { TodoForm } from '../TodoForm';
import { Todo, TodoItem } from '../TodoItem';

export const TodoList = () => {

    const [todos, set_todos] = useState<Array<Todo>>([])

    return (
        <div>
            <h1>To Do List</h1>
            <div></div>
            <TodoForm
                todos={todos}
                set_todos={set_todos}
            />
            <ul>
                {todos.map((todo: Todo, i: number) => (
                    <TodoItem key={i} todo={todo} todos={todos} set_todos={set_todos} />
                ))}
            </ul>
        </div>
    )
}
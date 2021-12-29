import { useEffect, useState } from 'react';
import { TodoForm } from '../TodoForm';
import { TodoItem } from '../TodoItem';
import { Todo } from '../TodoItem/types';
import { TodoListProps } from './types';

export const TodoList = ({ classes }: TodoListProps) => {

    const [todos, set_todos] = useState<Array<Todo>>([])

    const update_todos = async () => {
        // set_todos(payload.data.data)
    }

    useEffect(() => { update_todos() }, [])

    return (
        <div>
            <h1>To Do List</h1>
            <TodoForm />
            <ul>
                {todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} />
                ))}
            </ul>
        </div>
    )
}
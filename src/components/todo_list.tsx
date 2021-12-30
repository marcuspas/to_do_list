import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { TodoForm } from './todo_form';
import { Todo, TodoItem } from './todo_item';

export const TodoList = () => {

    const [todos, set_todos] = useState<Array<Todo>>([])

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
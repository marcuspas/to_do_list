import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { TodoForm } from './todo_form';
import injectSheet from 'react-jss'
import { styles } from '../styles/GlobalStyle';
import { Todo, TodoItem } from './todo_item';

interface TodoListProps {
    classes?: any
}

export const TodoList = injectSheet(styles)(({ classes }: TodoListProps) => {

    const [todos, set_todos] = useState<Array<Todo>>([])

    return (
        <Container>
            <h1>To Do List</h1>
            <TodoForm todos={todos} set_todos={set_todos} />
            {todos.map((todo: Todo, i: number) => (
                <Row
                    key={i}>
                    <TodoItem
                        todo={todo}
                        todos={todos}
                        set_todos={set_todos}
                    />
                </Row>
            ))}
        </Container>
    )
})
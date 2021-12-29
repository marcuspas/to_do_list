import { Container } from 'react-bootstrap';
import injectSheet from 'react-jss'
import { styles } from '../styles/GlobalStyle';

export interface Todo {
  text: string,
  is_checked: boolean
}

interface TodoItemProps {
  classes?: any
  todo: Todo
  todos: Array<Todo>
  set_todos: Function
}

export const TodoItem = injectSheet(styles)(({ classes, todo, todos, set_todos }: TodoItemProps) => {

  const handle_check = () => {
    const new_todos: Array<Todo> = todos.map((list_todo: Todo) => {
      return list_todo.text === todo.text
        ? { text: todo.text, is_checked: !todo.is_checked }
        : list_todo
    })
    set_todos(new_todos)
  }

  const delete_todo = () => {
    set_todos(todos.filter((list_todo: Todo) => list_todo.text !== todo.text))
  }

  return (
    <Container className={classes.container}>
      <input
        value={todo.text}
        type="text"
        className={`${classes.todo_item} ${classes.section}`}
        style={todo.is_checked
          ? { color: "#bebebe", textDecorationLine: "line-through" }
          : { color: "#000000", textDecorationLine: "none" }
        }
        disabled
      />
      <button onClick={handle_check} className={`${classes.button} ${classes.button_checkbox}`}>
        ✓
      </button>
      <button onClick={delete_todo} className={`${classes.button} ${classes.button_delete}`}>
        X
      </button>
    </Container>
  )
})
import { Container } from 'react-bootstrap';

export interface Todo {
  text: string,
  is_checked: boolean
}

interface TodoItemProps {
  todo: Todo
  todos: Array<Todo>
  set_todos: React.Dispatch<React.SetStateAction<Todo[]>>
}

export const TodoItem = ({ todo, todos, set_todos }: TodoItemProps) => {

  /**
   * Checks the todo when the check button is pressed
   */
  const handle_check = () => {
    const new_todos: Array<Todo> = todos.map((list_todo: Todo) => {
      return list_todo.text === todo.text
        ? { text: todo.text, is_checked: !todo.is_checked }
        : list_todo
    })
    set_todos(new_todos)
  }

  /**
   * Deletes the todo when the delet button is pressed
   */
  const delete_todo = () => {
    set_todos(todos.filter((list_todo: Todo) => list_todo.text !== todo.text))
  }

  return (
    <Container className="custom-container">
      <input
        value={todo.text}
        type="text"
        className="todo-item section"
        style={todo.is_checked
          ? { color: "#bebebe", textDecorationLine: "line-through" }
          : { color: "#000000", textDecorationLine: "none" }
        }
        disabled
      />
      <button onClick={handle_check} className="btn btn--checkbox">
        ✓
      </button>
      <button onClick={delete_todo} className="btn btn--delete">
        X
      </button>
    </Container>
  )
}
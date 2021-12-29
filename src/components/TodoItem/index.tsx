import { TodoItemProps } from "./types";
import injectSheet from 'react-jss'
import { styles } from "./styles";


export const TodoItem = injectSheet(styles)(({ classes, todo }: TodoItemProps) => {

  const handle_check = async () => {

  }


  return (
    <div className={`${classes.todo_item} ${todo.is_checked ? classes.section_checked : classes.section}`}>
      <div>{todo.text}</div>
      <button onClick={handle_check} className={`${classes.button} ${classes.button_checkbox}`}>
        ✓
      </button>
      <button className={`${classes.button} ${classes.button_delete}`}>
        X
      </button>
    </div>
  )

})
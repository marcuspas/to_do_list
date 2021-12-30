import ReactDOM from "react-dom";
import { TodoList } from "./components/todo_list";
import "./styles.css"

export const App = () => {

  return (
    <div className="card">
      <TodoList />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));
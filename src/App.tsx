import ReactDOM from "react-dom";
import { TodoList } from "./components/todo_list";
import { GlobalStyle } from "./styles/GlobalStyle";

export const App = () => {

  return (
    <div className="card">
      <GlobalStyle />
      <TodoList />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));
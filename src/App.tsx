import ReactDOM from "react-dom";
import { TodoList } from "./components/TodoList";
import { GlobalStyle } from "./styles/GlobalStyle";

export const App = () => {

  return (
    <div>
      <GlobalStyle />
      <TodoList />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));
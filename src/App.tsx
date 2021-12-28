import ReactDOM from "react-dom";
import { GlobalStyle } from './styles/GlobalStyle'

import { Greetings } from './components/Greetings'

export function App() {
  return (
    <>
      <GlobalStyle />
      <Greetings />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));
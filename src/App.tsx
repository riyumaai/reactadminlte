import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import TodoList from "./pages/todolist";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {Home()}
        </Route>
        <Route exact path="/todolist">
          {TodoList()}
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;

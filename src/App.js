import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";

const App = () => {
  return (
    <Router>
      <div className="App">
        <h1>Travel Widget</h1>
        <Switch>
          <Route path="/travel" component={Home}></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;

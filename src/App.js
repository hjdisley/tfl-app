import "./App.css"
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom"
import Home from "./components/Home"
import LineInfo from "./components/LineInfo"

const App = () => {
  return (
    <Router>
      <div className="App">
        <h1 className="title">Travel Widget</h1>
        <Switch>
          <Route exact path="/">
            <Redirect to="/travel" />
          </Route>
          <Route exact path="/travel" component={Home} />
          <Route path="/travel/:line" component={LineInfo} />
        </Switch>
      </div>
    </Router>
  )
}

export default App

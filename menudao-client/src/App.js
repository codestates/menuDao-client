import "./App.css";
import Main from "./pages/Main";
import Select from "./pages/Select";
import Mypage from "./pages/Mypage";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/select">
          <Select />
        </Route>
        {/* <Route exact path="/mypage">
          <Mypage />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;

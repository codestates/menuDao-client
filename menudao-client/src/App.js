import "./App.css";
import Main from "./pages/Main";
import Select from "./pages/Select";
import Recommend from "./pages/Recommend";
import Mypage from "./pages/Mypage";
import Diarylist from "./pages/Diaries";
import Diary from "./pages//Diary";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Main />} />
          <Route path="/select" render={() => <Select />} />
          <Route path="/recommend" render={() => <Recommend />} />
          <Route path="/mypage" render={() => <Mypage />} />
          <Route path="/diarylist" render={() => <Diarylist />} />
          <Route path="/diary" render={() => <Diary />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

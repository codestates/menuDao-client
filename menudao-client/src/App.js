import "./App.css";
import Main from "./pages/Main";
import Select from "./pages/Select";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";

// 로그인 성공 시, 서버에서 받은 "accessToken"값을 가져와서 조건부로 렌더링한다
function App() {
  const user_accessToken = useSelector(
    (status) => status.LoginReducer.accessToken
  );
  return (
    <>
      <Router>
        <Switch>
          <Route path="/main" render={() => <Main />} />
          <Route path="/select" render={() => <Select />} />
          <Route
            path="/"
            render={() => {
              if (user_accessToken) {
                console.log("accessToken 존재");
                return <Redirect to="/select" />;
              }
              return <Redirect to="/main" />;
            }}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;

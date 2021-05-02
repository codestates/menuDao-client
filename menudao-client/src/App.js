import "./App.css";
import Main from "./pages/Main";
import Select from "./pages/Select";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// 로그인 성공 시, 서버에서 받은 "accessToken"값을 가져와서 조건부로 렌더링한다
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        {/* <Nav /> */}
        <Route path="/select">
          <Select />
        </Route>
      </Switch>
    </Router>
  );

  // return (
  //   <div>
  //     <Switch>
  //       <Route
  //         path="/login"
  //         render={() => (
  //           <Login
  //             handleResponseSuccess={this.handleResponseSuccess.bind(this)}
  //           />
  //         )}
  //       />
  //       <Route exact path="/signup" render={() => <Signup />} />
  //       <Route
  //         exact
  //         path="/mypage"
  //         render={() => (
  //           <Mypage
  //             userinfo={userinfo}
  //             handleLogout={this.handleLogout.bind(this)}
  //           />
  //         )}
  //       />
  //       <Route
  //         path="/"
  //         render={() => {
  //           if (isLogin) {
  //             return <Redirect to="/mypage" />;
  //           }
  //           return <Redirect to="/login" />;
  //         }}
  //       />
  //     </Switch>
  //   </div>
  // );
}

export default App;

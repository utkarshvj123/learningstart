import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import StudentDetail from "./component/StudentDetail";
import StudentDash from "./component/StudentDash";
import SignIn from "./component/SignIn";
import MutationalChart from "./component/MutationalChart";
import TextAreaParent from "./component/TextAreaParent";
import Tab from "./component/Tab";
import add from "./component/add";
import MyProfile from "./component/MyProfile";
import Events from "./component/events";
// import todo from "./component/todo/todo";
import Todo from "./component/todo/todo";
import ContextTest from "./component/ContextTest";
import SteelEye from "./component/SteelEye";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/signin" component={SignIn}></Route>
          <Route exact path="/dash" component={StudentDetail}></Route>
          <Route exact path="/dash/:id" component={StudentDash} />
          <Route exact path="/table" component={MutationalChart} />
          <Route exact path="/area" component={TextAreaParent} />
          <Route exact path="/areaNew" component={Tab} />
          <Route exact path="/tree" component={add} />
          <Route exact path="/profile" component={MyProfile} />
          <Route exact path="/event" component={Events} />
          <Route exact path="/todo" component={Todo} />
          <Route exact path="/steel" component={SteelEye} />

          <Route exact path="/context" component={ContextTest}/>

<Route exact path="/" render={() => <Redirect to="/signin" />} />

          // {/* <Route exact path="/tree" component={Menu} /> */}


          {/* <Route exact path="*" render={() => <Redirect to="/signin" />} /> */}
          {/* both will work */}
          <Redirect from="*" to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

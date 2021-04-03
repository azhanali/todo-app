import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Dashboard from "./components/dashboard/Dashboard";
import NavBar from "./components/layout/NavBar";
import Tempdisplay from "./components/Temp";

function App() {
  return (
  <>
    <BrowserRouter>
    <NavBar />
      <Switch>
        <Route exact path = "/" component = {Tempdisplay}/>
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        {/* <Route path="/" component={Dashboard} /> */}
      </Switch>
    </BrowserRouter>
  </>
  );
}

export default App;

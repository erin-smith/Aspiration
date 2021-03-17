import React from "react";
import { Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Home from "./Pages/home";
import Error from "./Pages/error";


function App () {
  return (
    <Router>
      <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={Error} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

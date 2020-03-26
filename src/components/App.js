import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Store from "./Store.js";
import Navbar from "./navbar/Navbar.js";
import AppWrapper from "./AppWrapper.js";
import Home from "./pages/Home.js";
import Portfolio from "./pages/Portfolio.js";
function App() {
  return (
    <Router>
      <Store>
	<AppWrapper>
	  <Navbar />
	  <Switch>
	    <Route path="/examples">
	      <Portfolio />
	    </Route>
	    <Route path="/">
	      <Home />
	    </Route>
	  </Switch>
	</AppWrapper>
      </Store>
    </Router>
  );
}

export default App;

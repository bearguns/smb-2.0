import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Store from "./Store.js";
import Navbar from "./navbar/Navbar.js";
import AppWrapper from "./AppWrapper.js";
import Home from "./pages/Home.js";
function App() {
  return (
    <Store>
      <AppWrapper>
	<Navbar />
	<Router>
	  <Switch>
	    <Route path="/">
	      <Home />
	    </Route>
	  </Switch>
	</Router>
      </AppWrapper>
    </Store>
  );
}

export default App;

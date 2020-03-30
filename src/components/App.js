import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from "react-router-dom";
import Store from "./Store.js";
import Navbar from "./navbar/Navbar.js";
import AppWrapper from "./AppWrapper.js";
import Home from "./pages/Home.js";
import Portfolio from "./pages/Portfolio.js";
import Contact from "./pages/Contact.js";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Store>
	<AppWrapper>
	  <Navbar />
	  <Switch>
	    <Route path="/contact">
	      <Contact />
	    </Route>
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

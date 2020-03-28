import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTerminal,
  faCompass,
  faLaptopCode,
  faBrowser,
  faEnvelope,
  faPhone
} from "@fortawesome/pro-light-svg-icons";
import {
  faGithub,
  faJsSquare,
  faVuejs,
  faReact,
  faCss3Alt,
  faHtml5,
  faSass,
  faPython,
  faUbuntu,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faCompass,
  faGithub,
  faTerminal,
  faJsSquare,
  faVuejs,
  faReact,
  faCss3Alt,
  faHtml5,
  faSass,
  faPython,
  faUbuntu,
  faLaptopCode,
  faBrowser,
  faEnvelope,
  faPhone,
  faLinkedin
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

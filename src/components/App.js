import React, { useState } from "react";
import styled from "styled-components";
import Store from "./Store.js";
import Navbar from "./navbar/Navbar.js";
import AppWrapper from "./AppWrapper.js";

function App() {
  return (
    <Store>
      <AppWrapper>
        <Navbar />
      </AppWrapper>
    </Store>
  );
}

export default App;

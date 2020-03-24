import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import lightTheme from "./themes/light.js";
import darkTheme from "./themes/dark.js";
import Navbar from "./components/navbar/Navbar.js";
import Container from "./Container.js";

function App() {
  const themes = {
    light: lightTheme,
    dark: darkTheme
  };
  const [theme, setTheme] = useState(themes.light);
  const [activeThemeName, setActiveThemeName] = useState("light");
  const toggleTheme = () => {
    if (theme === themes.light) {
      setActiveThemeName("dark");
      return setTheme(themes.dark);
    }
    setActiveThemeName("light");
    return setTheme(themes.light);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Navbar toggleTheme={toggleTheme} activeThemeName={activeThemeName} />
      </Container>
    </ThemeProvider>
  );
}

export default App;

import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import lightTheme from "./themes/light.js";
import darkTheme from "./themes/dark.js";
import Navbar from "./components/navbar/Navbar.js";

const Container = styled.div`
  background-color: ${props => props.theme.colors.background};
  background: ${props => props.theme.background};
  background-attachment: fixed;
  height: 100vh;
  transition: background-color 0.25s ease-in-out;
  width: 100%;
`;

function App() {
  const themes = {
    light: lightTheme,
    dark: darkTheme
  };
  const [theme, setTheme] = useState(themes.dark);
  const toggleTheme = () => {
    if (theme === themes.light) {
      return setTheme(themes.dark);
    }
    return setTheme(themes.light);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Navbar />

        <button onClick={toggleTheme}>Switch Theme</button>
      </Container>
    </ThemeProvider>
  );
}

export default App;

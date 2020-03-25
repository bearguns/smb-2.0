import React, { useContext } from "react";
import { Context } from "./Store.js";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.background};
  background: ${props => props.theme.background};
  background-attachment: fixed;
  height: 100vh;
  transition: background-color 0.25s ease-in-out;
  width: 100%;
`;

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&family=Fira+Sans:wght@300;700&display=swap');

html {
  box-sizing: border-box;
}

body {
  margin: 0;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}
`;

export default function AppWrapper(props) {
  const [state] = useContext(Context);
  const { activeTheme } = state;
  const { children } = props;

  return (
    <React.Fragment>
      <GlobalStyle />
      <ThemeProvider theme={activeTheme}>
        <Wrapper>{children}</Wrapper>
      </ThemeProvider>
    </React.Fragment>
  );
}

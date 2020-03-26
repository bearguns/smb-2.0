import React, { useContext } from "react";
import { Context } from "./Store.js";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

const Wrapper = styled.div`
  background: ${props => props.theme.background};
  background-color: ${props => props.theme.colors.pattern};
  background-attachment: fixed;
  height: 100%;
  transition: background-color 0.25s ease-in-out;
  width: 100%;
  padding-top: 90px;
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

#root {
  height: 100%;
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

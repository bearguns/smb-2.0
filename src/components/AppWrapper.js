import React, { useContext } from "react";
import { Context } from "./Store.js";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import fadeIn from "../animations/fade-in.js";

const Wrapper = styled.div`
  padding-top: 164px;
  overflow-x: hidden;
  height: 100%;
  width: 100%;
  @media screen and (max-width: 812px) {
    padding-top: 90px;
  }
`;

const Background = styled.div`
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${props => props.theme.background};
  background-color: ${props => props.theme.colors.background};
  height: 100%;
  transition: background-color 0.25s ease-in-out;
  width: 100%;
  animation: ${fadeIn} 0.5s linear 0s 1;
  animation-fill-mode: forwards;
`;

const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  height: 100%;
}

body {
  margin: 0;
  min-height: 100%;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

#root {
  height: 100vh;
  @media screen and (max-width: 812px) {
    height: 100%;
  }
 }

li, a {
  font-family: "Fira Sans", sans-serif;
  font-weight: 400;
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
	<Background />
	<Wrapper>{children}</Wrapper>
      </ThemeProvider>
    </React.Fragment>
  );
}

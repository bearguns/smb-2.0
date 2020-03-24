import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const Container = styled.div`
  background-color: ${props => props.theme.colors.background};
  background: ${props => props.theme.background};
  background-attachment: fixed;
  height: 100vh;
  transition: background-color 0.25s ease-in-out;
  width: 100%;
`;

const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}
`;
export default function ThemeContainer(props) {
  const { theme, children } = props;

  return (
    <React.Fragment>
      <GlobalStyle />
      <Container theme={theme}>{children}</Container>
    </React.Fragment>
  );
}

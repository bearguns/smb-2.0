import React from "react";
import styled from "styled-components";

const Background = styled.div`
  height: ${props => (props.open ? "100vh" : "0px")};
  transition: all 0.5s;
  width: 100vw;
  background: ${props => props.theme.colors.background};
  opacity: 0.75;
  position: absolute;
  top: 90px;
  left: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export default function NavbarMenuBackground(props) {
  const { theme, open, children } = props;

  return (
    <Background open={open} theme={theme}>
      {children}
    </Background>
  );
}

import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "../Store.js";
const Paragraph = styled.p`
  padding: 4px;
  color: ${props =>
    props.themeName === "light"
      ? props.theme.colors.lightGray
      : props.theme.colors.black};
  font-family: "Fira Sans", sans-serif;
  font-weight: 400;
  font-size: 1rem;
`;

export default function Text(props) {
  const { theme, children } = props;
  const [state] = useContext(Context);
  const { activeThemeName } = state;
  return (
    <Paragraph theme={theme} themeName={activeThemeName}>
      {children}
    </Paragraph>
  );
}

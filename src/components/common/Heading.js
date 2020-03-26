import React, { useContext } from "react";
import styled from "styled-components";
import darkTheme from "../../themes/dark.js";
import lightTheme from "../../themes/light.js";
import { Context } from "../Store.js";
const fontFamily = `"Fira Code", monospace;`;
const fontWeightBold = 600;
const fontWeightRegular = 400;

const H1 = styled.h1`
  margin: 0px;
  color: ${props =>
    props.color ? props.theme.colors[props.color] : props.theme.colors.red};
  text-transform: uppercase;
  font-family: ${fontFamily};
  font-weight: ${fontWeightRegular};
  font-size: 2.25rem;
`;

const H2 = styled.h2`
  margin: 0px;
  color: ${props =>
    props.themeName === "dark"
      ? props.theme.colors.black
      : props.theme.colors.lightGray};
  text-transform: uppercase;
  font-family: ${fontFamily};
  font-weight: ${fontWeightRegular};
  font-size: 2rem;
`;

const H3 = styled.h3`
  margin: 0px;
  color: ${props => props.theme.colors.red};
  text-transform: uppercase;
  font-family: ${fontFamily};
  font-weight: ${fontWeightBold};
  font-size: 1.75rem;
`;

const H4 = styled.h4`
  margin: 0px;
  color: ${props =>
    props.themeName === "dark"
      ? props.theme.colors.black
      : props.theme.colors.lightGray};
  text-transform: uppercase;
  font-family: ${fontFamily};
  font-weight: ${fontWeightBold};
  font-size: 1.5rem;
`;

const H5 = styled.h5`
  margin: 0px;
  color: ${props =>
    props.themeName === "dark"
      ? props.theme.colors.lightGray
      : props.theme.colors.black};
  text-transform: uppercase;
  font-family: ${fontFamily};
  font-weight: ${fontWeightRegular};
  font-size: 1.25rem;
`;

const H6 = styled.h6`
  margin: 0px;
  color: ${props => props.theme.colors.red};
  text-transform: uppercase;
  font-family: ${fontFamily};
  font-weight: ${fontWeightBold};
  font-size: 1rem;
`;

export default function Heading(props) {
  const { level, children, color = "" } = props;
  const [state] = useContext(Context);
  const { activeTheme, activeThemeName } = state;
  const components = {
    1: H1,
    2: H2,
    3: H3,
    4: H4,
    5: H5,
    6: H6
  };
  const TagName = components[level];
  return (
    <TagName theme={activeTheme} themeName={activeThemeName} color={color}>
      {children}
    </TagName>
  );
}

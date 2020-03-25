import React from "react";
import styled from "styled-components";

const fontFamily = `"Fira Code", monospace;`;
const fontWeightBold = 600;
const fontWeightRegular = 400;

const H1 = styled.h1`
  margin: 0px;
  color: ${props =>
    props.color ? props.theme.colors[props.color] : props.theme.colors.red};
  text-transform: uppercase;
  font-family: ${fontFamily};
  font-weight: ${fontWeightBold};
  font-size: 2.25rem;
`;

const H2 = styled.h2`
  margin: 0px;
  color: ${props => props.theme.colors.black};
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

export default function Heading(props) {
  const { theme, level, children, color } = props;
  const components = {
    1: H1,
    2: H2,
    3: H3
  };
  const TagName = components[level];
  return (
    <TagName theme={theme} color={color}>
      {children}
    </TagName>
  );
}

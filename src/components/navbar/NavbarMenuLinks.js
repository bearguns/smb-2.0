import React from "react";
import styled from "styled-components";

const MenuLink = styled.a`
  text-decoration: underline;
  color: ${props => props.theme.colors.teal};
  text-align: center;
`;

export default function NavbarMenuLinks(props) {
  const { open, theme } = props;
  return (
    <div>
      <MenuLink theme={theme}>Home</MenuLink>
      <MenuLink theme={theme}>About</MenuLink>
      <MenuLink theme={theme}>Portfolio</MenuLink>
    </div>
  );
}

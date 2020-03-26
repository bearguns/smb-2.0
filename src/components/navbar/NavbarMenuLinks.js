import React from "react";
import styled from "styled-components";
import ThemeToggle from "../ThemeToggle.js";
import Heading from "../common/Heading.js";

const MenuLinks = styled.ul`
  opacity: ${props => (props.open ? 1 : 0)};
  transition: opacity 0.5s;
  width: 80%;
  padding: 0px;
`;

const MenuLink = styled.li`
  text-decoration: underline;
  list-style: none;
  color: ${props => props.theme.colors.red};
  text-align: center;
`;

export default function NavbarMenuLinks(props) {
  const { open, theme } = props;
  return (
    <MenuLinks open={open}>
      <MenuLink theme={theme}>Home</MenuLink>
      <MenuLink theme={theme}>About</MenuLink>
      <MenuLink theme={theme}>Portfolio</MenuLink>
      <MenuLink>
	<Heading level={2} color={"lightGray"}>
	  Use dark theme:
	</Heading>
	<ThemeToggle />
      </MenuLink>
    </MenuLinks>
  );
}

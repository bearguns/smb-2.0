import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ThemeToggle from "../ThemeToggle.js";
import Heading from "../common/Heading.js";

const MenuLinks = styled.ul`
  opacity: ${props => (props.open ? 1 : 0)};
  transition: opacity 0.5s;
  width: 80%;
  height: 40%;
  padding: 0px;
  text-align: center;
`;

const MenuLink = styled.li`
  list-style: none;
  text-transform: uppercase;
`;

const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.red};
  text-align: center;
  font-size: 2.5rem;
  font-family: "Fira Code", monospace;
`;

const ToggleWrapper = styled.div`
  max-width: 200px;
  margin: 0 auto;
`;

export default function NavbarMenuLinks(props) {
  const { open, handleLinkClick } = props;
  console.log(handleLinkClick);
  const links = [
    { to: "/", text: "home" },
    { to: "/examples", text: "my work" }
  ];
  return (
    <MenuLinks open={open}>
      {links.map(link => (
	<MenuLink key={link.to} onClick={handleLinkClick}>
	  <StyledLink to={link.to}>{link.text}</StyledLink>
	</MenuLink>
      ))}
      <MenuLink>
	<Heading level={6}>Use dark theme:</Heading>
	<ToggleWrapper>
	  <ThemeToggle />
	</ToggleWrapper>
      </MenuLink>
    </MenuLinks>
  );
}

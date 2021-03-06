import React, { useState } from "react";
import styled from "styled-components";
import NavbarButton from "./NavbarButton";
import NavbarMenu from "./NavbarMenu";
import Heading from "../common/Heading.js";
import slideInFromTop from "../../animations/slide-in-from-top.js";

const Nav = styled.nav`
  animation: ${slideInFromTop} 0.25s linear 0s 1;
  animation-fill-mode: forwards;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  height: 90px;
  z-index: 9;
  background-color: #000000;
  border-bottom: 2px solid;
  border-bottom-color: ${props => props.theme.colors.red};
  padding: 15px 27px;
  @media screen and (max-width: 812px) {
    padding: 5px 9px;

    & h1 {
      font-size: 1.25rem;
    }
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    return setMenuOpen(!menuOpen);
  };

  return (
    <Nav>
      <Heading level={1} color="lightGray">
	I'm Sean Brage
      </Heading>
      <NavbarButton open={menuOpen} handleMenuButtonClick={toggleMenu} />
      <NavbarMenu open={menuOpen} handleLinkClick={toggleMenu} />
    </Nav>
  );
}

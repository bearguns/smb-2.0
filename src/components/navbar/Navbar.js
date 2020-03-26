import React, { useState } from "react";
import styled from "styled-components";
import NavbarButton from "./NavbarButton";
import NavbarMenu from "./NavbarMenu";
import Heading from "../common/Heading.js";

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  height: 90px;
  background-color: #000000;
  border-bottom: 2px solid;
  border-bottom-color: ${props => props.theme.colors.red};
  padding: 15px 27px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function Navbar(props) {
  const { activeThemeName } = props;
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
      <NavbarMenu open={menuOpen} />
    </Nav>
  );
}

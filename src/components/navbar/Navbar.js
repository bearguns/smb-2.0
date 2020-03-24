import React, { useState } from "react";
import styled from "styled-components";
import ThemeToggle from "../ThemeToggle";
import NavBarMenuButton from "./NavbarMenuButton";
import NavBarMenu from "./NavbarMenu";

const Navbar = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  height: 90px;
  background-color: #000000;
  padding: 15px 27px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function StyledNavbar(props) {
  const { toggleTheme, activeThemeName } = props;
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    return setMenuOpen(!menuOpen);
  };

  return (
    <Navbar>
      <ThemeToggle
        toggleTheme={toggleTheme}
        activeThemeName={activeThemeName}
      />
      <NavBarMenuButton open={menuOpen} handleMenuButtonClick={toggleMenu} />
      <NavBarMenu open={menuOpen} />
    </Navbar>
  );
}

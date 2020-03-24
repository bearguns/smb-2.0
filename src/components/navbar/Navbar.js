import React, { useState } from "react";
import styled from "styled-components";
import NavBarMenuButton from "./NavbarMenuButton";
import NavBarMenu from "./NavbarMenu";

const Navbar = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  height: 90px;
  background-color: #000000;
  padding: 15px 27px;
`;

export default function StyledNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    return setMenuOpen(!menuOpen);
  };

  return (
    <Navbar>
      <NavBarMenuButton open={menuOpen} handleMenuButtonClick={toggleMenu} />
      <NavBarMenu open={menuOpen} />
    </Navbar>
  );
}

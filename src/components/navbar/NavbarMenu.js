import React from "react";
import styled from "styled-components";
import NavbarMenuBackground from "./NavbarMenuBackground";
import NavbarMenuLinks from "./NavbarMenuLinks";

const Menu = styled.div`
  margin: 0 auto;
  z-index: 3;
  display: ${props => (props.open ? "flex" : "none")};
  flex-direction: column;
`;

export default function NavbarMenu(props) {
  const { theme, open } = props;

  return (
    <NavbarMenuBackground open={open}>
      <Menu open={open}>
        <NavbarMenuLinks />
      </Menu>
    </NavbarMenuBackground>
  );
}

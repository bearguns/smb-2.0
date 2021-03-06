import React from "react";
import styled from "styled-components";
import NavbarMenuLinks from "./NavbarMenuLinks";

const Menu = styled.div`
  margin: 0 auto;
  position: absolute;
  top: 90px;
  left: 0;
  height: ${props => (props.open ? "100vh" : "0px")};
  width: 100%;
  z-index: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  transition: height 0.25s;
  overflow: hidden;

  &:after {
    content: "";
    background-color: ${props => props.theme.colors.menuBackground};
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    height: 100%;
    width: 100%;
  }
`;

export default function NavbarMenu(props) {
  const { open, handleLinkClick } = props;

  return (
    <Menu open={open}>
      <NavbarMenuLinks open={open} handleLinkClick={handleLinkClick} />
    </Menu>
  );
}

import React, { useState } from "react";
import styled from "styled-components";

const NavBarButton = styled.button`
  height: 64px;
  width: 64px;
  background: transparent;
  display: flex;
  flex-direction: column;
  border: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const MenuLine = styled.div`
  position: relative;
  z-index: 2;
  height: 3px;
  width: 100%;
  margin-top: 12px;
  background-color: ${props => props.theme.colors.pink};
  transition: all 0.2s ease-in-out;

  &:nth-of-type(1) {
    transform: ${props =>
      props.open ? "rotate(45deg) translateY(10px) translateX(10px)" : "none"};
    z-index: 3;
  }

  &:nth-of-type(2) {
    opacity: ${props => (props.open ? 0 : 1)};
    z-index: 0;
  }

  &:nth-of-type(3) {
    transform: ${props =>
      props.open
        ? "rotate(-45deg) translateY(-12px) translateX(12px)"
        : "none"};
    z-index: 3;
  }
`;

export default function NavbarMenuButton(props) {
  const { open, handleMenuButtonClick, theme } = props;
  return (
    <NavBarButton theme={theme} open={open} onClick={handleMenuButtonClick}>
      <MenuLine open={open} />
      <MenuLine open={open} />
      <MenuLine open={open} />
    </NavBarButton>
  );
}

import React from "react";
import styled from "styled-components";
import Heading from "../common/Heading.js";

const Controls = styled.div`
  display: flex;
  align-items: flex-end;
  & h3 {
    margin-bottom: -8px;
    @media screen and (max-width: 812px) {
      display: none;
    }
  }
`;
const Button = styled.button`
  position: relative;
  height: 48px;
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

const Line = styled.div`
  position: absolute;
  z-index: 2;
  height: 3px;
  width: 90%;
  margin-top: 12px;
  background-color: ${props => props.theme.colors.red};
  transition: all 0.2s ease-in-out;

  &:nth-of-type(1) {
    transform: ${props =>
      props.open ? "rotate(45deg) translateY(10px) translateX(10px)" : "none"};
    z-index: 3;
  }

  &:nth-of-type(2) {
    opacity: ${props => (props.open ? 0 : 1)};
    z-index: 0;
    margin-top: 26px;
  }

  &:nth-of-type(3) {
    transform: ${props =>
      props.open
	? "rotate(-45deg) translateY(-12px) translateX(12px)"
	: "none"};
    z-index: 3;
    margin-top: 42px;
  }
`;

export default function NavbarMenuButton(props) {
  const { open, handleMenuButtonClick, theme } = props;
  return (
    <Controls>
      <Heading level={3}>Menu</Heading>
      <Button theme={theme} open={open} onClick={handleMenuButtonClick}>
	<Line open={open} />
	<Line open={open} />
	<Line open={open} />
      </Button>
    </Controls>
  );
}

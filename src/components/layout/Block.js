import React from "react";
import styled from "styled-components";
import slideInFromLeft from "../../animations/slide-in-from-left.js";
import slideInFromRight from "../../animations/slide-in-from-right.js";
import slideInFromTop from "../../animations/slide-in-from-top.js";
import slideInFromBottom from "../../animations/slide-in-from-bottom.js";

const Wrapper = styled.section`
  padding: 27px;
  grid-column: ${props => props.gridColumn};
  grid-row: span ${props => props.gridRow};
  background-color: ${props => props.theme.colors.black};
  @media screen and (max-width: 812px) {
    padding: 15px;
    grid-column: 1 / -1;
    grid-row: span ${props => props.gridRow};
  }

  transform: ${props =>
    props.animation ? props.animation.initialState : "none"};
  animation: ${props => (props.animation ? props.animation.animation : "none")};
  animation-duration: 0.25s;
  animation-delay: ${props => (props.delay ? props.delay : "0s")};
  animation-fill-mode: forwards;
`;

export default function Block(props) {
  const { columns, rows, appear = "none", delay = 0, children } = props;
  const gridColumn =
    {
      full: "1 / -1",
      left: "1 / 4",
      right: "4 / 7"
    }[columns] || "1 / -1";

  const animation =
    {
      left: {
	animation: slideInFromLeft,
	initialState: "translateX(-100%)"
      },
      right: {
	animation: slideInFromRight,
	initialState: "translateX(100%)"
      },
      top: {
	animation: slideInFromTop,
	initialState: "translateY(100%)"
      },
      bottom: {
	animation: slideInFromBottom,
	initialState: "translateY(-400%)"
      }
    }[appear] || appear;

  return (
    <Wrapper
      gridColumn={gridColumn}
      gridRow={rows}
      animation={animation}
      delay={delay}
    >
      {children}
    </Wrapper>
  );
}

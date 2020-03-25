import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "./Store.js";
import lightTheme from "../themes/light.js";
import darkTheme from "../themes/dark.js";

const Toggle = styled.div`
  position: relative;
  left: 32.5%;
`;

const Label = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
  width: 100px;
  height: 40px;
  background-color: ${props => props.theme.colors.darkGray};
  border-radius: 100px;
  z-index: 2;
  &:after {
    content: "";
    position: absolute;
    display: block;
    width: 38px;
    height: 38px;
    margin: 1px;
    background-color: #ffffff;
    border-radius: 90px;
    transition: 0.25s;
  }
`;

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  position: relative;
  opacity: 0;
  z-index: 1;
  width: 100px;
  height: 40px;
  visibility: hidden;
  &:checked + ${Label} {
    background-color: ${props => props.theme.colors.green};
    &::after {
      content: "";
      margin-left: 60px;
      transition: 0.25s;
    }
  }
`;

export default function ThemeToggle(props) {
  const { theme } = props;
  const [state, dispatch] = useContext(Context);
  const { activeThemeName } = state;
  const toggleTheme = () => {
    if (activeThemeName === "light") {
      dispatch({ type: "SET_ACTIVE_THEME_NAME", payload: "dark" });
      return dispatch({ type: "SET_ACTIVE_THEME", payload: darkTheme });
    }
    dispatch({ type: "SET_ACTIVE_THEME_NAME", payload: "light" });
    return dispatch({ type: "SET_ACTIVE_THEME", payload: lightTheme });
  };

  return (
    <Toggle theme={theme}>
      <Checkbox
        theme={theme}
        checked={activeThemeName === "dark" ? "checked" : ""}
        readOnly
      ></Checkbox>
      <Label theme={theme} onClick={toggleTheme}></Label>
    </Toggle>
  );
}

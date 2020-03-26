import React, { createContext, useReducer } from "react";
import light from "../themes/light.js";

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_ACTIVE_THEME_NAME":
      return {
	...state,
	activeThemeName: action.payload
      };
    case "SET_ACTIVE_THEME":
      return {
	...state,
	activeTheme: { ...action.payload }
      };
    default:
      return state;
  }
};

const initialState = {
  activeThemeName: "light",
  activeTheme: { ...light }
};

export const Context = createContext(initialState);

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export default Store;

import { createContext } from "react";
import { ThemeState } from "../_types/themeState";
import { ThemeAction } from "../_types/themeAction";
import { AppReducerContext } from "../../shared/_types/appReducerContext";

export const initialState = {
  theme: undefined,
  loaded: false
} as ThemeState;

export const ThemeContext = createContext({
  state: initialState,
} as AppReducerContext<ThemeState, ThemeAction>);




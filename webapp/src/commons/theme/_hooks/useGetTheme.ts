import { useContext } from "react";
import { ThemeContext } from "../_contexts/themeContext";

export function useGetTheme(): string | undefined {
  const { state } = useContext(ThemeContext);
  return state?.theme;
}
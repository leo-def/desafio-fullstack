import { useContext } from "react";
import { ThemeContext } from "../_contexts/themeContext";
import { ThemeActionTypeEnum } from "../_enums/themeActionType.enum";

export function useSetTheme(): (theme: string) => void {
  const { dispatch } = useContext(ThemeContext);
  return (theme: string): void => {
    if (dispatch) {
      dispatch({
        type: ThemeActionTypeEnum.SET_THEME,
        payload: { theme },
      });
    }
  };
}

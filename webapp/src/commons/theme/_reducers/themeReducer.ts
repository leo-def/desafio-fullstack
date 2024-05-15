import { ThemeActionTypeEnum } from "../_enums/themeActionType.enum";
import { ThemeAction } from "../_types/themeAction";
import { ThemeState } from "../_types/themeState";

export const themeReducer = (
  state: ThemeState,
  action: ThemeAction
): ThemeState => {
  switch (action.type) {
    case ThemeActionTypeEnum.SET_THEME:
      return { ...state, theme: action.payload.theme } as ThemeState;
    case ThemeActionTypeEnum.LOAD_THEME:
      return {
        ...state,
        loaded: true,
        theme: action.payload.theme,
      } as ThemeState;
    default:
      return state;
  }
};

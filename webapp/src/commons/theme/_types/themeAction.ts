
import { AppAction } from "../../shared/_types/appAction";
import { ThemeActionTypeEnum } from "../_enums/themeActionType.enum";
import { ThemeActionPayload } from "./themeActionPayload";

export interface ThemeAction
  extends AppAction<ThemeActionTypeEnum, ThemeActionPayload> {}

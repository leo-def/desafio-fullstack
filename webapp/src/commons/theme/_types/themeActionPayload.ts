import { LoadThemePayload } from "./payloads/LoadThemePayload";
import { SetThemePayload } from "./payloads/SetThemePayload";

export type ThemeActionPayload = SetThemePayload | LoadThemePayload;

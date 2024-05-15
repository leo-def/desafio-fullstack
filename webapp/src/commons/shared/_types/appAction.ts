import { AppActionPayload } from "./appActionPayload";

export interface AppAction<T, F extends AppActionPayload> {
  type: T;
  payload: F;
}

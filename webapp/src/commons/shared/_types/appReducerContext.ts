import { Dispatch } from "react";
import { AppState } from "./appState";

export interface AppReducerContext<T extends AppState, F> {
  state: T;
  dispatch?: Dispatch<F>;
}

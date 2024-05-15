import { createContext } from "react";
import { ManageContextValue } from "../_types/manageContextValue";
import { initialState } from "../_constants/initialState";
import { initialConfig } from "../_constants/initialConfig";

export const ManageContext = createContext({
  state: initialState,
  config: initialConfig
} as ManageContextValue<any>);


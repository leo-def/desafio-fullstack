'use client'

import { createContext } from "react";
import { SidebarState } from "../_types/sidebarState";
import { SidebarAction } from "../_types/sidebarAction";
import { AppReducerContext } from "../../shared/_types/appReducerContext";
export const initialState = {
  open: false
} as SidebarState;

export const SidebarContext = createContext({
  state: initialState,
} as AppReducerContext<SidebarState, SidebarAction>);




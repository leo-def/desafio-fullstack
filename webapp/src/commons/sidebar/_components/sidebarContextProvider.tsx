'use client'

import { PropsWithChildren, useReducer, useMemo } from "react";
import { initialState, SidebarContext } from "../_contexts/sidebarContext";
import { sidebarReducer } from "../_reducers/sidebarReducer";

export const SidebarContextProvider = ({ children }: PropsWithChildren) => {
    const [state, dispatch] = useReducer(sidebarReducer, initialState);
    const value = useMemo(() => ({ state, dispatch }), [state, dispatch])
    return (
        <SidebarContext.Provider value={value}  data-testid="sidebar-context-provider">
            {children}
        </SidebarContext.Provider>
    );
};
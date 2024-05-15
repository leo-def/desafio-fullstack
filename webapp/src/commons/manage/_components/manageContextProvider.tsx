"use client";

import { PropsWithChildren, useReducer, useMemo } from "react";
import { initialState } from "../_constants/initialState";
import { ManageContext } from "../_contexts/manageContext";
import { manageStatusReducer } from "../_reducers/manageStatusReducer";
import { ManageConfig } from "../_types/config/manageConfig";
import { ManageContextValue } from "../_types/manageContextValue";

export interface ManageContextProviderProps<T> extends PropsWithChildren {
    readonly config: ManageConfig<T>
}
export function ManageContextProvider<T>({ children, config }: ManageContextProviderProps<T>) {
    const [state, dispatch] = useReducer(manageStatusReducer, initialState);
    const value = useMemo(() => ({ state, dispatch, config } as ManageContextValue<T>), [state, dispatch, config])
    return (
        <ManageContext.Provider value={value} data-testid="manage-context-provider">
            {children}
        </ManageContext.Provider>
    );
};
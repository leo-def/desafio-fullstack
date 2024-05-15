'use client'

import { PropsWithChildren, useReducer, useMemo } from "react";
import { initialState, WaitingContext } from "../_contexts/waitingContext";
import { waitingReducer } from "../_reducers/waitingReducer";

export const WaitingContextProvider = ({ children }: PropsWithChildren) => {
    const [state, dispatch] = useReducer(waitingReducer, initialState);
    const value = useMemo(() => ({ state, dispatch }), [state, dispatch])
    return (
        <WaitingContext.Provider value={value} data-testid="waiting-context-provider">
            {children}
        </WaitingContext.Provider>
    );
};
'use client'

import { PropsWithChildren, useReducer, useMemo } from "react";
import { initialState, MessageContext } from "../_contexts/messageContext";
import { waitingReducer } from "../_reducers/messageReducer";

export const MessageContextProvider = ({ children }: PropsWithChildren) => {
    const [state, dispatch] = useReducer(waitingReducer, initialState);
    const value = useMemo(() => ({ state, dispatch }), [state, dispatch])
    return (
        <MessageContext.Provider value={value}  data-testid="message-context-provider">
            {children}
        </MessageContext.Provider>
    );
};
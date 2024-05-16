'use client'

import { PropsWithChildren, useReducer, useMemo } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { initialState, ThemeContext } from "../_contexts/themeContext";
import { themeReducer } from "../_reducers/themeReducer";
import CssBaseline from "@mui/material/CssBaseline";

export const ThemeContextProvider = ({ children }: PropsWithChildren) => {
    const [state, dispatch] = useReducer(themeReducer, initialState);
    const value = useMemo(() => ({ state, dispatch }), [state, dispatch])

    const theme = createTheme({
        palette: {
            mode: state?.theme === 'dark' ? 'dark' : 'light',
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <ThemeContext.Provider value={value} data-testid="theme-context-provider">
                {children}
            </ThemeContext.Provider>
        </ThemeProvider>
    );
};
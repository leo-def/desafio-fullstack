'use client'

import { PropsWithChildren, useContext, useEffect } from "react";
import { ThemeStorageKeyEnum } from "../_enums/themeStorageKey.enum";
import { ThemeContext } from "../_contexts/themeContext";
import { ThemeActionTypeEnum } from "../_enums/themeActionType.enum";
import { LoadThemePayload } from "../_types/payloads/LoadThemePayload";

export const ThemeLoader = ({ children }: PropsWithChildren) => {
    const { dispatch, state } = useContext(ThemeContext);

    useEffect(() => {
        const localTheme = localStorage.getItem(ThemeStorageKeyEnum.THEME);
        if (!state || !dispatch) {
            return;
        }
        const { loaded } = state;
        if (!loaded) {
            dispatch({
                type: ThemeActionTypeEnum.LOAD_THEME,
                payload: { theme: localTheme } as LoadThemePayload,
            });
        }
    }, [dispatch, state])
    
    useEffect(() => {
        if (!state || !dispatch) {
            return;
        }
        const { loaded, theme } = state;
        const localTheme = localStorage.getItem(ThemeStorageKeyEnum.THEME);
        if (loaded && theme && localTheme !== theme) {
            localStorage.setItem(ThemeStorageKeyEnum.THEME, JSON.stringify(theme));
        }
    }, [dispatch, state])

    return (
        <>
            {children}
        </>
    );
};
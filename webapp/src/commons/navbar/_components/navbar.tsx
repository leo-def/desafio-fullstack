'use client'

import React, { PropsWithChildren, useCallback } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import {
    Menu as MenuIcon,
    Brightness4 as Brightness4Icon,
    Brightness7 as Brightness7Icon
} from '@mui/icons-material';
import Link from 'next/link';
import { MobileNavbarMenu } from './mobile/mobileNavbarMenu';
import { MobileNavbarOptions } from './mobile/mobileNavbarOptions';
import { WebNavbarOptions } from './web/webNavbarOptions';
import { WebNavbarMenu } from './web/webNavbarMenu';
import { NavbarWrapper } from './navbarWrapper';
import { useIsSidebarOpen } from '../../../commons/sidebar/_hooks/useIsSidebarOpen';
import { useSetSidebarOpen } from '../../../commons/sidebar/_hooks/useSetSidebarOpen';
import { useGetTheme } from '../../../commons/theme/_hooks/useGetTheme';
import { useSetTheme } from '../../../commons/theme/_hooks/useSetTheme';

export function Navbar({ children }: PropsWithChildren) {
    const [webAnchorEl, setWebAnchorEl] = React.useState<null | HTMLElement>(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
        React.useState<null | HTMLElement>(null);

    const isWebMenuOpen = Boolean(webAnchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleWebMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setWebAnchorEl(event.currentTarget);
    };

    const handleWebMenuClose = () => {
        setWebAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const mobileMenuId = 'primary-search-account-menu-mobile';

    const isSidebarOpen = useIsSidebarOpen()
    const setSidebarOpen = useSetSidebarOpen()
    const toggleSidebar = useCallback(() => {
        setSidebarOpen(!isSidebarOpen)
    }, [isSidebarOpen, setSidebarOpen])

    const setTheme = useSetTheme()
    const theme = useGetTheme()
    const toggleTheme = useCallback(() => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }, [theme, setTheme])

    return (
        <>
            <NavbarWrapper>
                <IconButton edge="start" color="inherit" aria-label="menu" data-testid="toggle-sidebar-button" sx={{ mr: 2 }} onClick={toggleSidebar}>
                    <MenuIcon />
                </IconButton>
                <Link href="/" passHref data-testid="home-link">
                    <Typography variant="h6" color="inherit" component="div">Home</Typography>
                </Link>
                <Box sx={{ flexGrow: 1 }} />
                {children}
                <IconButton sx={{ ml: 1 }} onClick={toggleTheme} color="inherit" data-testid="toggle-theme-button">
                    {theme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
                <MobileNavbarOptions
                    data-testid="mobile-navbar-options"
                    menuId={mobileMenuId}
                    handleMenuOpen={handleMobileMenuOpen} />
                <WebNavbarOptions
                    data-testid="web-navbar-options"
                    menuId={menuId}
                    handleMenuOpen={handleWebMenuOpen} />
            </NavbarWrapper>
            <MobileNavbarMenu
                data-testid="mobile-navbar-menu"
                menuId={mobileMenuId}
                anchorEl={mobileMoreAnchorEl}
                isMenuOpen={isMobileMenuOpen}
                handleMenuClose={handleMobileMenuClose}
                handleMenuOpen={handleMobileMenuOpen} />
            <WebNavbarMenu
                data-testid="web-navbar-menu"
                menuId={menuId}
                anchorEl={webAnchorEl}
                isMenuOpen={isWebMenuOpen}
                handleMenuClose={handleWebMenuClose} />
        </>)
}
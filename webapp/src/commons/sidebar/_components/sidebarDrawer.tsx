'use client'

import React, { PropsWithChildren, useCallback } from 'react';
import { IconButton, Box, Drawer } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { useIsSidebarOpen } from '../_hooks/useIsSidebarOpen';
import { useSetSidebarOpen } from '../_hooks/useSetSidebarOpen';

export function SidebarDrawer(props: PropsWithChildren) {

    const isSidebarOpen = useIsSidebarOpen()
    const setSidebarOpen = useSetSidebarOpen()

    const toggleDrawer = useCallback(
        (open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setSidebarOpen(open);
            }, [setSidebarOpen]);

    return (<>
        <IconButton aria-label="open sidebar" data-testid="open-sidebar" onClick={toggleDrawer(true)}>
            <MenuIcon />
        </IconButton>
        <Drawer
            data-testid="drawer"
            anchor="left"
            open={isSidebarOpen}
            onClose={toggleDrawer(false)}
        >    <Box
            data-testid="presentation"
            role="presentation"
            sx={{ width: 250 }}
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
                {props.children}
            </Box>
        </Drawer>
    </>
    );
}
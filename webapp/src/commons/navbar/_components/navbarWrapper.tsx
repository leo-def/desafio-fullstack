'use client'

import React from 'react'
import { AppBar, Toolbar } from '@mui/material'

export function NavbarWrapper({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <React.Fragment>
            <AppBar position="fixed">
                <Toolbar>{children} </Toolbar>
            </AppBar>
            <Toolbar />
        </React.Fragment>
    )
}

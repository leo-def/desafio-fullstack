import * as React from 'react';
import Link from "next/link";
import { MouseEventHandler } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { PopoverProps } from '@mui/material';

export interface WebNavbarMenuProps {
    anchorEl: PopoverProps['anchorEl']
    isMenuOpen: boolean
    menuId: string
    handleMenuClose?: MouseEventHandler<HTMLLIElement>
}

export function WebNavbarMenu({ anchorEl, isMenuOpen, menuId, handleMenuClose }: WebNavbarMenuProps) {
    return (<Menu
        anchorEl={anchorEl}
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        id={menuId}
        keepMounted
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        open={isMenuOpen}
        onClose={handleMenuClose}
    >
        <Link href="/mentor" passHref>
            <MenuItem onClick={handleMenuClose}>Mentors</MenuItem>
        </Link>
    </Menu>)
}
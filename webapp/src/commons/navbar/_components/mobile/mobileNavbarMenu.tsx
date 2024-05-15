import * as React from 'react';
import Link from "next/link";
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { MouseEventHandler } from 'react';
import { PopoverProps } from '@mui/material';

export interface MobileNavbarMenuProps {
    anchorEl: PopoverProps['anchorEl']
    isMenuOpen: boolean
    menuId: string
    handleMenuClose?: MouseEventHandler<HTMLLIElement>
    handleMenuOpen?: MouseEventHandler<HTMLLIElement>
}

export function MobileNavbarMenu({
    anchorEl,
    isMenuOpen,
    menuId,
    handleMenuClose,
    handleMenuOpen
}: MobileNavbarMenuProps) {
    const notifications = 0;
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
        <MenuItem onClick={handleMenuOpen}>
            <Link href="/mentor" passHref>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Mentors</p>
            </Link>
        </MenuItem>
    </Menu>
    )
}

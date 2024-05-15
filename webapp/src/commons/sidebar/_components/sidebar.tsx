'use client'
import React from "react";
import Link from "next/link";
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider } from "@mui/material";
import {
    Home as HomeIcon,
    AccountCircle as AccountCircleIcon
} from '@mui/icons-material';
import { SidebarDrawer } from "./sidebarDrawer";

export function Sidebar() {
    return (<SidebarDrawer>
        <List>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <Link href="/" passHref>
                        <ListItemText primary="Home" />{/* i18n */}
                    </Link>
                </ListItemButton>
            </ListItem>
        </List>
        <Divider />
        <List>
            <ListItem disablePadding>
                <Link href="/mentor" passHref>
                    <ListItemButton>
                        <ListItemIcon>
                            <AccountCircleIcon />
                        </ListItemIcon>
                        <ListItemText primary="Mentors" />{/* i18n */}
                    </ListItemButton>
                </Link>
            </ListItem>
        </List>

    </SidebarDrawer>)
}
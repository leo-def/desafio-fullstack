import * as React from 'react';
import { MouseEventHandler } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';

export interface WebNavbarOptionsProps {
  menuId: string
  handleMenuOpen?: MouseEventHandler<HTMLButtonElement | HTMLLIElement>
}

export function WebNavbarOptions({ menuId, handleMenuOpen }: WebNavbarOptionsProps) {
  const notifications = 0;
  return (<React.Fragment>
    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
        <IconButton
          size="large"
          edge="end"
          aria-controls={menuId}
          aria-haspopup="true"
          onClick={handleMenuOpen}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
    </Box>
  </React.Fragment>)
}

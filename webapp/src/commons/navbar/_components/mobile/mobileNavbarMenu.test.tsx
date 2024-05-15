import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MobileNavbarMenu } from './mobileNavbarMenu';

describe('MobileNavbarMenu', () => {
  it('should open and close the menu when clicked', () => {
    const menuId = 'test-menu';
    const handleMenuOpen = jest.fn();
    const handleMenuClose = jest.fn();

    const { getByText, getByRole } = render(
      <MobileNavbarMenu
        anchorEl={null}
        isMenuOpen={false}
        menuId={menuId}
        handleMenuOpen={handleMenuOpen}
        handleMenuClose={handleMenuClose}
      />
    );

    expect(getByRole('menu')).not.toBeVisible();

    fireEvent.click(getByRole('button'));

    expect(getByText('Mentors')).toBeVisible();

    fireEvent.click(getByText('Mentors'));

    expect(handleMenuClose).toHaveBeenCalledTimes(1);
  });
});

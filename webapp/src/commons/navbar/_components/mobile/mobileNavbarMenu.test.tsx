import React from 'react';
import { render, fireEvent, getByTestId } from '@testing-library/react';
import { MobileNavbarMenu } from './mobileNavbarMenu';

describe('MobileNavbarMenu', () => {
  it('should open and close the menu when clicked', () => {

    const menuId = 'test-menu';
    const handleMenuOpen = jest.fn();
    const handleMenuClose = jest.fn();
    const { getByText } = render(<div id="mobile-navbar-menu-wrapper">
      <MobileNavbarMenu
        anchorEl={render(<div data-testid="mobile-navbar-menu-anchor-el"></div>).getByTestId("mobile-navbar-menu-anchor-el")}
        isMenuOpen={true}
        menuId={menuId}
        handleMenuOpen={handleMenuOpen}
        handleMenuClose={handleMenuClose}
      />
    </div>);

    expect(getByText('Mentors')).toBeVisible();
  });
});

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { WebNavbarMenu } from './webNavbarMenu';

describe('WebNavbarMenu', () => {
  it('should call the menu close handler when a menu item is clicked', () => {
    const menuId = 'test-menu';
    const handleMenuClose = jest.fn();

    const { getByText } = render(
      <WebNavbarMenu
        anchorEl={null}
        isMenuOpen={true}
        menuId={menuId}
        handleMenuClose={handleMenuClose}
      />
    );

    const menuItem = getByText('Mentors');
    expect(menuItem).toBeInTheDocument();
    fireEvent.click(menuItem);
    expect(handleMenuClose).toHaveBeenCalledTimes(1);
  });
});
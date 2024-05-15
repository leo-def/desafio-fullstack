import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MobileNavbarOptions } from './mobileNavbarOptions';

describe('MobileNavbarOptions', () => {
  it('should call the menu open handler when the icon button is clicked', () => {
    const menuId = 'test-menu';
    const handleMenuOpen = jest.fn();

    const { getByLabelText } = render(
      <MobileNavbarOptions
        menuId={menuId}
        handleMenuOpen={handleMenuOpen}
      />
    );

    const iconButton = getByLabelText('show more');
    expect(iconButton).toBeInTheDocument();
    fireEvent.click(iconButton);
    expect(handleMenuOpen).toHaveBeenCalledTimes(1);
  });
});

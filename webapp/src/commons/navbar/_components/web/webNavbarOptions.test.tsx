import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { WebNavbarOptions } from './webNavbarOptions';

describe('WebNavbarOptions', () => {
  it('should call the menu open handler when the button is clicked', () => {
    const menuId = 'test-menu';
    const handleMenuOpen = jest.fn();

    const { getByRole } = render(
      <WebNavbarOptions
        menuId={menuId}
        handleMenuOpen={handleMenuOpen}
      />
    );
    const button = getByRole('button');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(handleMenuOpen).toHaveBeenCalledTimes(1);
  });
});

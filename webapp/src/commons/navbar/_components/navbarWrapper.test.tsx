import React from 'react';
import { render } from '@testing-library/react';
import { NavbarWrapper } from './navbarWrapper';

describe('NavbarWrapper', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <NavbarWrapper>
        <div>Test Children</div>
      </NavbarWrapper>
    );

    expect(getByText('Test Children')).toBeInTheDocument();
  });

});

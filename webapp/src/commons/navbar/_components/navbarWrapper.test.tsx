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

  it('renders with an AppBar and Toolbar', () => {
    const { container } = render(
      <NavbarWrapper>
        <div>Test Children</div>
      </NavbarWrapper>
    );

    const appBar = container.querySelector('AppBar');
    const toolbar = container.querySelector('Toolbar');

    expect(appBar).toBeInTheDocument();
    expect(toolbar).toBeInTheDocument();
  });
});

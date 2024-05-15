import React from 'react';
import { render } from '@testing-library/react';
import NavbarLayout from './layout';

jest.mock('../../commons/navbar/_components/navbar', () => ({
  Navbar: jest.fn(({ children }) => <div data-testid="mock-navbar">{children}</div>)
}));

describe('NavbarLayout', () => {
  it('renders children inside Navbar', () => {
    const { getByTestId } = render(<NavbarLayout>Child Content</NavbarLayout>);
    const navbar = getByTestId('mock-navbar');
    expect(navbar).toBeInTheDocument();
    expect(navbar).toHaveTextContent('Child Content');
  });
});
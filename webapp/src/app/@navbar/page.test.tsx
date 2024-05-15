import React from 'react';
import { render } from '@testing-library/react';
import NavBar from './page';

describe('NavBar', () => {
  it('renders "Welcome"', () => {
    const { getByText } = render(<NavBar />);
    const navBar = getByText('Welcome');
    expect(navBar).toBeInTheDocument();
  });
});
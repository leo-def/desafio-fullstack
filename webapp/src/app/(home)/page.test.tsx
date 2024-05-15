import React from 'react';
import { render } from '@testing-library/react';
import Home from './page';

describe('Home', () => {
  it('renders "Home"', () => {
    const { getByText } = render(<Home />);
    const homeText = getByText('Home');
    expect(homeText).toBeInTheDocument();
  });
});
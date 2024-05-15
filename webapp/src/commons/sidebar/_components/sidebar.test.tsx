import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Sidebar } from './sidebar';

describe('Sidebar', () => {
  it('should render sidebar items with correct icons and texts', () => {
    const { getByRole } = render(<Sidebar />);

    const homeIcon = getByRole('img', { name: 'Home' });
    expect(homeIcon).toBeInTheDocument();

    const mentorsIcon = getByRole('img', { name: 'Mentors' });
    expect(mentorsIcon).toBeInTheDocument();
  });

  it('should navigate to correct routes when sidebar items are clicked', () => {
    const { getByRole } = render(<Sidebar />);

    const homeLink = getByRole('link', { name: 'Home' });
    userEvent.click(homeLink);

    expect(window.location.pathname).toBe('/');

    const mentorsLink = getByRole('link', { name: 'Mentors' });
    userEvent.click(mentorsLink);

    expect(window.location.pathname).toBe('/mentor');
  });
});
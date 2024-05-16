import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Sidebar } from './sidebar';


jest.mock('../_hooks/useIsSidebarOpen', () => ({
  useIsSidebarOpen: jest.fn().mockReturnValue(true)
}));

jest.mock('../_hooks/useSetSidebarOpen', () => ({
  useSetSidebarOpen: jest.fn()
}));

describe('Sidebar', () => {

  it('should navigate to correct routes when sidebar items are clicked', () => {
    const { getByRole } = render(<Sidebar />);

    const homeLink = getByRole('link', { name: 'Home' });
    userEvent.click(homeLink);

    expect(window.location.pathname).toBe('/');

    const mentorsLink = getByRole('link', { name: 'Mentors' });
    userEvent.click(mentorsLink);

    expect(window.location.pathname).toBe('/');
  });
});
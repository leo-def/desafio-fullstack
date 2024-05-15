import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Navbar } from './navbar';

jest.mock('./mobile/mobileNavbarMenu', () => ({
  MobileNavbarMenu: jest.fn(() => <div data-testid="mobile-navbar-menu">Mock MobileNavbarMenu Component</div>)
}));

jest.mock( './mobile/mobileNavbarOptions', () => ({
  MobileNavbarOptions: jest.fn(() => <div data-testid="mobile-navbar-options">Mock MobileNavbarOptions Component</div>)
}));

jest.mock('./web/webNavbarOptions', () => ({
  WebNavbarOptions: jest.fn(() => <div data-testid="web-navbar-options">Mock WebNavbarOptions Component</div>)
}));

jest.mock('./web/webNavbarMenu', () => ({
  WebNavbarMenu: jest.fn(() => <div data-testid="web-navbar-menu">Mock WebNavbarMenu Component</div>)
}));


jest.mock('../../../commons/sidebar/_hooks/useIsSidebarOpen', () => ({
  useIsSidebarOpen: jest.fn()
}));

jest.mock('../../../commons/sidebar/_hooks/useSetSidebarOpen', () => ({
  useSetSidebarOpen: jest.fn()
}));

jest.mock('../../../commons/theme/_hooks/useGetTheme', () => ({
  useGetTheme: jest.fn()
}));

jest.mock('../../../commons/theme/_hooks/useSetTheme', () => ({
  useSetTheme: jest.fn()
}));

import { useIsSidebarOpen } from '../../../commons/sidebar/_hooks/useIsSidebarOpen';
import { useSetSidebarOpen } from '../../../commons/sidebar/_hooks/useSetSidebarOpen';
import { useGetTheme } from '../../../commons/theme/_hooks/useGetTheme';
import { useSetTheme } from '../../../commons/theme/_hooks/useSetTheme';

describe('Navbar', () => {
  beforeEach(() => {
    (useIsSidebarOpen as jest.Mock<any, any, any>).mockReturnValue(false);
    (useSetSidebarOpen as jest.Mock<any, any, any>).mockReturnValue(jest.fn());
    (useGetTheme as jest.Mock<any, any, any>).mockReturnValue('light');
    (useSetTheme as jest.Mock<any, any, any>).mockReturnValue(jest.fn());
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render Navbar with buttons and links', () => {
    const { getByTestId } = render(<Navbar>Hello World</Navbar>);

    const toggleSidebarButton = getByTestId('toggle-sidebar-button');
    expect(toggleSidebarButton).toBeInTheDocument();

    const homeLink = getByTestId('home-link');
    expect(homeLink).toBeInTheDocument();

    const toggleThemeButton = getByTestId('toggle-theme-button');
    expect(toggleThemeButton).toBeInTheDocument();

    const mobileNavbarOptions = getByTestId('mobile-navbar-options');
    expect(mobileNavbarOptions).toBeInTheDocument();

    const webNavbarOptions = getByTestId('web-navbar-options');
    expect(webNavbarOptions).toBeInTheDocument();

    const mobileNavbarMenu = getByTestId('mobile-navbar-menu');
    expect(mobileNavbarMenu).toBeInTheDocument();

    const webNavbarMenu = getByTestId('web-navbar-menu');
    expect(webNavbarMenu).toBeInTheDocument();
  });

  it('should toggle sidebar when clicking the toggle sidebar button', () => {
    const { getByTestId } = render(<Navbar>Hello World</Navbar>);

    const toggleSidebarButton = getByTestId('toggle-sidebar-button');

    fireEvent.click(toggleSidebarButton);
    expect(useSetSidebarOpen).toHaveBeenCalledTimes(1);

    fireEvent.click(toggleSidebarButton);
    expect(useSetSidebarOpen).toHaveBeenCalledTimes(1);
  });

  it('should toggle theme when clicking the toggle theme button', () => {
    const { getByTestId } = render(<Navbar>Hello World</Navbar>);

    const toggleThemeButton = getByTestId('toggle-theme-button');

    fireEvent.click(toggleThemeButton);
    expect(useSetTheme).toHaveBeenCalled();
  });
});

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SidebarDrawer } from './sidebarDrawer';

jest.mock('../_hooks/useIsSidebarOpen', () => ({
  useIsSidebarOpen: jest.fn()
}));
import { useIsSidebarOpen } from '../_hooks/useIsSidebarOpen';

jest.mock('../_hooks/useSetSidebarOpen', () => ({
  useSetSidebarOpen: jest.fn()
}));

describe('SidebarDrawer', () => {
  it('should open and close the sidebar drawer when the menu icon is clicked', () => {
    (useIsSidebarOpen as jest.Mock<any, any, any>).mockReturnValueOnce(false)
    const { queryByTestId } = render(<SidebarDrawer><span>Hello World</span></SidebarDrawer>);

    const drawer = queryByTestId('drawer');
    expect(drawer).not.toBeInTheDocument();

  });

  it('should close the sidebar drawer when clicking outside the drawer', () => {
    (useIsSidebarOpen as jest.Mock<any, any, any>).mockReturnValueOnce(true)
    const { queryByTestId } = render(<SidebarDrawer><span>Hello World</span></SidebarDrawer>);

    const drawer = queryByTestId('drawer');
    expect(drawer).toBeInTheDocument();

  });
});

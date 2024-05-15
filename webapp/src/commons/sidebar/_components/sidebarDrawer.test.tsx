import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SidebarDrawer } from './sidebarDrawer';

describe('SidebarDrawer', () => {
  it('should open and close the sidebar drawer when the menu icon is clicked', () => {
    const { getByTestId, queryByTestId } = render(<SidebarDrawer><span>Hello World</span></SidebarDrawer>);

    const drawer = queryByTestId('drawer');
    expect(drawer).not.toBeVisible();

    const menuIcon = getByTestId('open-sidebar');
    fireEvent.click(menuIcon);

    expect(drawer).toBeVisible();

    fireEvent.click(menuIcon);

    expect(drawer).not.toBeVisible();
  });

  it('should close the sidebar drawer when clicking outside the drawer', () => {
    const { getByTestId, queryByTestId } = render(<SidebarDrawer><span>Hello World</span></SidebarDrawer>);

    const drawer = queryByTestId('drawer');
    expect(drawer).not.toBeVisible();

    const menuIcon = getByTestId('open-sidebar');
    fireEvent.click(menuIcon);

    expect(drawer).toBeVisible();

    const presentation = getByTestId('presentation');
    fireEvent.click(presentation);

    expect(drawer).not.toBeVisible();
  });
});

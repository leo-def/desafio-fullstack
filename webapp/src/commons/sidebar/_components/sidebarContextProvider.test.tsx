import React from 'react';
import { render } from '@testing-library/react';
import { SidebarContextProvider } from './sidebarContextProvider';
import { SidebarState } from '../_types/sidebarState';


describe('SidebarContextProvider', () => {
  it('renders children and provides SidebarContext value', () => {

    const initialState = {
      open: undefined
    } as SidebarState;

    const { getByTestId } = render(
      <SidebarContextProvider>
        <ChildComponent />
      </SidebarContextProvider>
    );

    expect(getByTestId('child-component')).toBeInTheDocument();

    const sidebarContextProvider = getByTestId('sidebar-context-provider');
    expect(sidebarContextProvider).toBeInTheDocument();

    expect(sidebarContextProvider).toHaveAttribute('value', JSON.stringify({ state: initialState }));
  });
});

const ChildComponent = () => {
  return <div data-testid="child-component">Child Component</div>;
};
import React from 'react';
import { render } from '@testing-library/react';
import { SidebarContextProvider } from './sidebarContextProvider';

jest.mock('../_contexts/sidebarContext', () => ({
  SidebarContext: { Provider: jest.fn(({ children, value }) => <div data-testid="sidebar-context-provider" data-testvalue={JSON.stringify(value)}>{children}</div>)}
}));

describe('SidebarContextProvider', () => {
  it('renders children and provides SidebarContext value', () => {

    const { getByTestId } = render(
      <SidebarContextProvider>
        <ChildComponent />
      </SidebarContextProvider>
    );

    expect(getByTestId('child-component')).toBeInTheDocument();

    const sidebarContextProvider = getByTestId('sidebar-context-provider');
    expect(sidebarContextProvider).toBeInTheDocument();

    expect(sidebarContextProvider).toHaveAttribute('data-testvalue', JSON.stringify({}));
  });
});

const ChildComponent = () => {
  return <div data-testid="child-component">Child Component</div>;
};
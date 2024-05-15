import { render } from '@testing-library/react';
import { AppProvider } from './appProvider';

jest.mock('../../commons/message/_components/messageContextProvider', () => ({
  MessageContextProvider: jest.fn(() => <div data-testid="message-context-provider">Mock MessageContextProvider Component</div>)
}));

jest.mock('../../commons/sidebar/_components/sidebarContextProvider', () => ({
  SidebarContextProvider: jest.fn(() => <div data-testid="sidebar-context-provider">Mock SidebarContextProvider Component</div>)
}));

jest.mock('../../commons/theme/_components/themeContextProvider', () => ({
  ThemeContextProvider: jest.fn(() => <div data-testid="theme-context-provider">Mock ThemeContextProvider Component</div>)
}));

jest.mock('../../commons/waiting/_components/waitingContextProvider', () => ({
  WaitingContextProvider: jest.fn(() => <div data-testid="waiting-context-provider">Mock WaitingContextProvider Component</div>)
}));

describe('AppProvider', () => {
  it('renders children wrapped in context providers', () => {
    const { getByText } = render(
      <AppProvider>
        <div>Hello World</div>
      </AppProvider>
    );

    expect(getByText('Hello World')).toBeInTheDocument();

  });

  
  it('renders ThemeContextProvider component', () => {
    const { getByTestId } = render(
    <AppProvider>
      <div>Hello World</div>
    </AppProvider>
  );
    const themeContextProviderComponent = getByTestId('theme-context-provider');
    expect(themeContextProviderComponent).toBeInTheDocument();
  });
  
  it('renders MessageContextProvider component', () => {
    const { getByTestId } = render(
    <AppProvider>
      <div>Hello World</div>
    </AppProvider>
  );
    const messageContextProviderComponent = getByTestId('message-context-provider');
    expect(messageContextProviderComponent).toBeInTheDocument();
  });

  
  it('renders SidebarContextProvider component', () => {
    const { getByTestId } = render(
    <AppProvider>
      <div>Hello World</div>
    </AppProvider>
  );
    const sidebarContextProviderComponent = getByTestId('sidebar-context-provider');
    expect(sidebarContextProviderComponent).toBeInTheDocument();
  });

  
  it('renders WaitingContextProvider component', () => {
    const { getByTestId } = render(
    <AppProvider>
      <div>Hello World</div>
    </AppProvider>
  );
    const waitingContextProviderComponent = getByTestId('waiting-context-provider');
    expect(waitingContextProviderComponent).toBeInTheDocument();
  });
});    



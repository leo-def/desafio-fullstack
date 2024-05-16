import React from 'react';
import { render } from '@testing-library/react';
import { ThemeContextProvider } from './themeContextProvider';

jest.mock('../_contexts/themeContext', () => ({
  ThemeContext: { Provider: jest.fn(({ children, value }) => <div data-testid="theme-context-provider" data-testvalue={JSON.stringify(value)}>{children}</div>)}
}));

describe('ThemeContextProvider', () => {
  it('renders children and provides ThemeContext value', () => {


    const { getByTestId } = render(
      <ThemeContextProvider>
        <ChildComponent />
      </ThemeContextProvider>
    );

    expect(getByTestId('child-component')).toBeInTheDocument();

    const themeContextProvider = getByTestId('theme-context-provider');
    expect(themeContextProvider).toBeInTheDocument();

    expect(themeContextProvider).toHaveAttribute('data-testvalue', JSON.stringify({  }));
  });
});

const ChildComponent = () => {
  return <div data-testid="child-component">Child Component</div>;
};
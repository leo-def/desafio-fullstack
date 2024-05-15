import React from 'react';
import { render } from '@testing-library/react';
import { ThemeContextProvider } from './themeContextProvider';
import { ThemeState } from '../_types/themeState';


describe('ThemeContextProvider', () => {
  it('renders children and provides ThemeContext value', () => {

    const initialState = {
      theme: undefined,
      loaded: false
    } as ThemeState;

    const { getByTestId } = render(
      <ThemeContextProvider>
        <ChildComponent />
      </ThemeContextProvider>
    );

    expect(getByTestId('child-component')).toBeInTheDocument();

    const themeContextProvider = getByTestId('theme-context-provider');
    expect(themeContextProvider).toBeInTheDocument();

    expect(themeContextProvider).toHaveAttribute('value', JSON.stringify({ state: initialState }));
  });
});

const ChildComponent = () => {
  return <div data-testid="child-component">Child Component</div>;
};
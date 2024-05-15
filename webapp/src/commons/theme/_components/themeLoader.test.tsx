import React from 'react';
import { render } from '@testing-library/react';
import { ThemeLoader } from './themeLoader';
import { ThemeContextProvider } from './themeContextProvider';

describe('ThemeLoader', () => {
  it('should load theme from local storage and apply to theme context', () => {
    const mockLocalStorage = {
      getItem: jest.fn().mockReturnValue('dark'),
      setItem: jest.fn(),
    } as unknown as Storage;
    global.localStorage = mockLocalStorage;

    render(
      <ThemeContextProvider>
        <ThemeLoader />
      </ThemeContextProvider>
    );

    expect(mockLocalStorage.getItem).toHaveBeenCalledWith('THEME');
    expect(mockLocalStorage.setItem).toHaveBeenCalledWith(
      'THEME',
      JSON.stringify('dark')
    );
  });

});
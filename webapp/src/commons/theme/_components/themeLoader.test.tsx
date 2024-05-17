import React from 'react';
import { render } from '@testing-library/react';
import { ThemeLoader } from './themeLoader';
import { ThemeContext } from '../_contexts/themeContext';


describe('ThemeLoader', () => {
  it('should load theme from local storage and apply to theme context', () => {
    const getItemMock = jest.fn().mockReturnValue('dark')
    const setItemMock = jest.fn()
    Storage.prototype.setItem = setItemMock
    Storage.prototype.getItem = getItemMock
    const mockDispatch = jest.fn()
    const value = {
      state: { theme: undefined, loaded: false }, dispatch: mockDispatch
    }
    render(
      <ThemeContext.Provider value={value}>
        <ThemeLoader />
      </ThemeContext.Provider>
    );
    expect(getItemMock).toHaveBeenCalledTimes(2);
    expect(mockDispatch).toHaveBeenCalledWith({ "payload": { "theme": "dark" }, "type": "LOAD_THEME" });
  });

  it('should load theme from theme context and apply to local storage', () => {
    const getItemMock = jest.fn().mockReturnValue('dark')
    const setItemMock = jest.fn()
    Storage.prototype.setItem = setItemMock
    Storage.prototype.getItem = getItemMock
    const mockDispatch = jest.fn()
    const value = {
      state: { theme: 'light', loaded: true }, dispatch: mockDispatch
    }
    render(
      <ThemeContext.Provider value={value}>
        <ThemeLoader />
      </ThemeContext.Provider>
    );
    expect(getItemMock).toHaveBeenCalledTimes(2);
    expect(setItemMock).toHaveBeenCalledWith("APP_THEME", "\"light\"");
  });

});
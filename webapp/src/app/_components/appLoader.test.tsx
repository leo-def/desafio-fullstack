import { render } from '@testing-library/react'
import { AppLoader } from './appLoader';

describe('AppLoader', () => {
  it('renders ThemeLoader component', () => {
    const { getByTestId } = render(<AppLoader />);
    const themeLoaderComponent = getByTestId('theme-loader');
    expect(themeLoaderComponent).toBeInTheDocument();
  });
});
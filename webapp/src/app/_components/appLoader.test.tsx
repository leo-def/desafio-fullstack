import { render } from '@testing-library/react'
import { AppLoader } from './appLoader';

jest.mock('../../commons/theme/_components/themeLoader', () => ({
  ThemeLoader: jest.fn(() => <div data-testid="theme-loader" ></div>)
}));


describe('AppLoader', () => {
  it('renders ThemeLoader component', () => {
    const { getByTestId } = render(<AppLoader />);
    const themeLoaderComponent = getByTestId('theme-loader');
    expect(themeLoaderComponent).toBeInTheDocument();
  });
});
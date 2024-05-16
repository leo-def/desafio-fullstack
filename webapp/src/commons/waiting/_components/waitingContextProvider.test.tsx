import React from 'react';
import { render } from '@testing-library/react';
import { WaitingContextProvider } from './waitingContextProvider';


jest.mock('../_contexts/waitingContext', () => ({
  WaitingContext: { Provider: jest.fn(({ children, value }) => <div data-testid="waiting-context-provider" data-testvalue={JSON.stringify(value)}>{children}</div>)}
}));

describe('WaitingContextProvider', () => {
  it('renders children and provides WaitingContext value', () => {
    const { getByTestId } = render(
      <WaitingContextProvider>
        <ChildComponent />
      </WaitingContextProvider>
    );

    expect(getByTestId('child-component')).toBeInTheDocument();

    const waitingContextProvider = getByTestId('waiting-context-provider');
    expect(waitingContextProvider).toBeInTheDocument();

    expect(waitingContextProvider).toHaveAttribute('data-testvalue', JSON.stringify({ }));
  });
});

const ChildComponent = () => {
  return <div data-testid="child-component">Child Component</div>;
};
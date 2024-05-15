import React from 'react';
import { render } from '@testing-library/react';
import { WaitingContextProvider } from './waitingContextProvider';
import { WaitingState } from '../_types/waitingState';


describe('WaitingContextProvider', () => {
  it('renders children and provides WaitingContext value', () => {

    const initialState = {
      tasks: []
    } as WaitingState;

    const { getByTestId } = render(
      <WaitingContextProvider>
        <ChildComponent />
      </WaitingContextProvider>
    );

    expect(getByTestId('child-component')).toBeInTheDocument();

    const waitingContextProvider = getByTestId('waiting-context-provider');
    expect(waitingContextProvider).toBeInTheDocument();

    expect(waitingContextProvider).toHaveAttribute('value', JSON.stringify({ state: initialState }));
  });
});

const ChildComponent = () => {
  return <div data-testid="child-component">Child Component</div>;
};
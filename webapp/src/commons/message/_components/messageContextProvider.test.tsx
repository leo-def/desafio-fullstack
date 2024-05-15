import React from 'react';
import { render } from '@testing-library/react';
import { MessageContextProvider } from './messageContextProvider';
import { MessageState } from '../_types/messageState';


describe('MessageContextProvider', () => {
  it('renders children and provides MessageContext value', () => {

     const initialState = {
      messages: []
    } as MessageState;

    const { getByTestId } = render(
      <MessageContextProvider>
        <ChildComponent />
      </MessageContextProvider>
    );

    expect(getByTestId('child-component')).toBeInTheDocument();

    const messageContextProvider = getByTestId('message-context-provider');
    expect(messageContextProvider).toBeInTheDocument();

    expect(messageContextProvider).toHaveAttribute('value', JSON.stringify({ state: initialState }));
  });
});

const ChildComponent = () => {
  return <div data-testid="child-component">Child Component</div>;
};
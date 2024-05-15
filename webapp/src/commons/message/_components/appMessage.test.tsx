import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { AppMessage } from './appMessage';


jest.mock('../_hooks/useGetMessages', () => ({
  useGetMessages: jest.fn()
}));

jest.mock('../_hooks/useRemoveMessage', () => ({
  useRemoveMessage: jest.fn()
}));

import { useGetMessages } from '../_hooks/useGetMessages';
import { useRemoveMessage } from '../_hooks/useRemoveMessage';

describe('AppMessage', () => {
  beforeEach(() => {
    (useGetMessages as jest.Mock<any, any, any>).mockReturnValue([]);
    (useRemoveMessage as jest.Mock<any, any, any>).mockReturnValue(jest.fn());
  });

  it('renders AppMessage component with messages', () => {
    const messages = [
      { id: '1', severity: 'error', body: 'Error message' },
      { id: '2', severity: 'warning', body: 'Warning message', title: 'Warning' },
    ];
    (useGetMessages as jest.Mock<any, any, any>).mockReturnValue(messages);

    const {
      getAllByRole,
      getByText
    } = render(<AppMessage />);

    expect(getAllByRole('alert')).toHaveLength(messages.length);

    messages.forEach((message) => {
      const alertElement = getByText(message.body);
      expect(alertElement).toBeInTheDocument();
      expect(alertElement).toHaveTextContent(message.body);
      if (message.title) {
        expect(getByText(message.title)).toBeInTheDocument();
      }
    });
  });

  it('removes message when closed', () => {
    const messages = [
      { id: '1', severity: 'error', body: 'Error message' },
      { id: '2', severity: 'warning', body: 'Warning message', title: 'Warning' },
    ];
    (useGetMessages as jest.Mock<any, any, any>).mockReturnValue(messages);
    const mockRemoveMessage = jest.fn();
    (useRemoveMessage as jest.Mock<any, any, any>).mockReturnValue(mockRemoveMessage);

    const { getAllByRole } = render(<AppMessage />);

    fireEvent.click(getAllByRole('button')[0]);

    expect(mockRemoveMessage).toHaveBeenCalledWith(messages[0]);
  });

  it('renders AppMessage component without messages', () => {
    const { queryByRole } = render(<AppMessage />);

    expect(queryByRole('alert')).toBeNull();
  });

});
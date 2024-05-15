import React from 'react';
import { render } from '@testing-library/react';
import { CardGrid } from './cardGrid';

jest.mock('../../../_hooks/useGetManageContextValue', () => ({
  useGetManageContextValue: jest.fn()
}));
import { useGetManageContextValue } from '../../../_hooks/useGetManageContextValue';

describe('CardGrid', () => {
  it('renders CardGrid component with CardGridItem for each item in fetchResult', () => {

    const fetchResult = {
      items: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' }
      ]
    };


    (useGetManageContextValue as jest.Mock<any, any, any>).mockReturnValue({
      state: { fetchResult }
    });

    const {
      getByTestId,
      getByText
    } = render(<CardGrid />);


    expect(getByTestId('card-grid')).toBeInTheDocument();


    fetchResult.items.forEach(item => {
      expect(getByText(item.name)).toBeInTheDocument();
    });
  });


});

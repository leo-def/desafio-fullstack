import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { CardGridItem } from './cardGridItem';

jest.mock('../../../../../commons/manage/_hooks/useGetManageContextValue', () => ({
  useGetManageContextValue: jest.fn()
}));

jest.mock('../../../../../commons/manage/_hooks/useSetManageAction', () => ({
  useSetManageAction: jest.fn()
}));

import { useGetManageContextValue } from '../../../_hooks/useGetManageContextValue';
import { useSetManageAction } from '../../../_hooks/useSetManageAction';

describe('CardGridItem', () => {
  it('renders CardGridItem component with item data', () => {
    const item = { id: 1, name: 'Item 1' };
    const index = 0;

    (useGetManageContextValue as jest.Mock<any, any, any>).mockReturnValue({
      config: {
        collection: { grid: { ItemDisplay: () => <div>{item.name}</div> } },
        actions: { onDelete: jest.fn() },
        disabled: false
      }
    });

    const {
      getByTestId,
      getByText
    } = render(<CardGridItem item={item} index={index} />);

    expect(getByTestId('card-grid-item')).toBeInTheDocument();

    expect(getByText(item.name)).toBeInTheDocument();
  });

  it('triggers action functions on button clicks', () => {
    const item = { id: 1, name: 'Item 1' };
    const index = 0;

    const setAction = jest.fn();
    (useSetManageAction as jest.Mock<any, any, any>).mockReturnValue(setAction);

    const onDelete = jest.fn();
    (useGetManageContextValue as jest.Mock<any, any, any>).mockReturnValue({
      config: {
        collection: { grid: { ItemDisplay: () => <div>{item.name}</div> } },
        actions: { onDelete },
        disabled: false
      }
    });

    const { getByLabelText } = render(<CardGridItem item={item} index={index} />);

    fireEvent.click(getByLabelText('edit manage item'));
    expect(setAction).toHaveBeenCalledWith('EDIT', item);

    fireEvent.click(getByLabelText('delete manage item'));
    expect(onDelete).toHaveBeenCalledWith(item);
    expect(setAction).toHaveBeenCalledWith('COLLECTION', item);

    fireEvent.click(getByLabelText('open manage item'));
    expect(setAction).toHaveBeenCalledWith('SHOW', item);
  });

});
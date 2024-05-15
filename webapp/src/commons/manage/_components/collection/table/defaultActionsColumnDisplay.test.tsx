import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { DefaultActionsColumnDisplay } from './defaultActionsColumnDisplay';

jest.mock('../../../_hooks/useGetManageContextValue', () => ({
  useGetManageContextValue: jest.fn()
}));

jest.mock('../../../_hooks/useSetManageAction', () => ({
  useSetManageAction: jest.fn()
}));

import { useGetManageContextValue } from '../../../_hooks/useGetManageContextValue';
import { useSetManageAction } from '../../../_hooks/useSetManageAction';

describe('DefaultActionsColumnDisplay', () => {
  it('renders DefaultActionsColumnDisplay component with item data', () => {
    const item = { id: 1, name: 'Item 1' };
    const index = 0;

    (useGetManageContextValue as jest.Mock<any, any, any>).mockReturnValue({
      config: {
        actions: { onDelete: jest.fn() },
        disabled: false
      }
    });

    const {
      getByTestId,
      getByText
    } = render(<DefaultActionsColumnDisplay item={item} index={index} />);

    expect(getByTestId('default-actions-column-display')).toBeInTheDocument();

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
        actions: { onDelete },
        disabled: false
      }
    });

    const { getByLabelText } = render(<DefaultActionsColumnDisplay item={item} index={index} />);

    fireEvent.click(getByLabelText('edit manage item'));
    expect(setAction).toHaveBeenCalledWith(expect.any(Object), 'EDIT');

    fireEvent.click(getByLabelText('delete manage item'));
    expect(onDelete).toHaveBeenCalledWith(item);
    expect(setAction).toHaveBeenCalledWith(expect.any(Object), 'COLLECTION');

    fireEvent.click(getByLabelText('open manage item'));
    expect(setAction).toHaveBeenCalledWith(expect.any(Object), 'SHOW');
  });
});
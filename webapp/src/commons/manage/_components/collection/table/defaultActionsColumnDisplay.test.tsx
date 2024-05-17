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
        actions: { onDelete: undefined },
        disabled: false
      }
    });
    const {
      getByTestId
    } = render(<div><DefaultActionsColumnDisplay item={item} index={index} /></div>);

    expect(getByTestId('toggle-actions-column-icon-button')).toBeInTheDocument();
  });

  it('triggers action functions on button clicks', () => {
    const item = { id: 1, name: 'Item 1' };
    const index = 0;

    const onDelete = jest.fn().mockReturnValue(Promise.resolve());
    (useGetManageContextValue as jest.Mock<any, any, any>).mockReturnValue({
      config: {
        actions: { onDelete },
        disabled: false
      }
    });

    const setAction = jest.fn();
    (useSetManageAction as jest.Mock<any, any, any>).mockReturnValue(setAction);


    const { getByTestId, getByLabelText } = render(<div><DefaultActionsColumnDisplay item={item} index={index} /></div>);


    fireEvent.click(getByTestId("toggle-actions-column-icon-button"))

    fireEvent.click(getByLabelText('edit manage item'));
    expect(setAction).toHaveBeenCalledWith('EDIT', item);

    fireEvent.click(getByLabelText('delete manage item'));
    expect(onDelete).toHaveBeenCalled();

    fireEvent.click(getByLabelText('open manage item'));
    expect(setAction).toHaveBeenCalledWith('SHOW', item);
  });
});
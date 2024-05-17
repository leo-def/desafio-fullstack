import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { FormCard } from './formCard';
import { Actions } from '../../_types/config/actions/actions';
import { CollectionConfig } from '../../_types/config/collection/collectionConfig';
import { GridConfig } from '../../_types/config/collection/grid/gridConfig';
import { TableConfig } from '../../_types/config/collection/table/tableConfig';
import { TableField } from '../../_types/config/collection/table/tableField';
import { FormConfig } from '../../_types/config/form/formConfig';
import { ManageConfig } from '../../_types/config/manageConfig';

jest.mock('../../_hooks/useGetManageContextValue', () => ({
  useGetManageContextValue: jest.fn()
}));

jest.mock('../../_hooks/useSetManageAction', () => ({
  useSetManageAction: jest.fn()
}));

import { useGetManageContextValue } from '../../_hooks/useGetManageContextValue';
import { useSetManageAction } from '../../_hooks/useSetManageAction';

const config = {
  disabled: false,
  collection: {
    grid: {
      ItemDisplay: undefined,
    } as GridConfig<Object>,
    table: {
      columns: [
        {
          field: 'id',
          label: 'ID',
          Title: () => <span>ID</span>,
          Display: ({item}) => <span>{(item as any).id}</span>,
        } as TableField<Object>,
        {
          field: 'name',
          label: 'Name',
          Title: () => <span>Name</span>,
          Display: ({item}) => <span>{(item as any).name}</span>,
        } as TableField<Object>,
      ]
    } as TableConfig<Object>,
    filter: {
      id: 'mentor-filter-form',
      map: undefined,
      disabled: false,
      Display: undefined,
      limitInputLabel: 'Rows per page'
    }
  } as CollectionConfig<Object>,
  form: {
    id: 'mentor-form',
    onSubmit: undefined,
    Display: undefined,
    disabled: false
  } as FormConfig<Object>,
  actions: {
    onDelete: undefined,
    onFetch: undefined
  } as Actions<Object>
} as ManageConfig<Object>

describe('FormCard', () => {
  it('renders FormCard component with close button', () => {
    const values = { id: 'clw3qoybt0000mgjc3nuwr3uk', name: 'Jhon' };
    const action = 'EDIT';
    const setActionMock = jest.fn();

    (useGetManageContextValue as jest.Mock<any, any, any>).mockReturnValue({
      state: {
        action
      },
      config
    });

    (useSetManageAction as jest.Mock<any, any, any>).mockReturnValue(setActionMock);

    const {
      getByLabelText
    } = render(<FormCard values={values} />);

    const closeButton = getByLabelText('close');
    expect(closeButton).toBeInTheDocument();

    fireEvent.click(closeButton);

    expect(setActionMock).toHaveBeenCalledWith('COLLECTION');
  });

});
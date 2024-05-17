import React from 'react';
import { getAllByTestId, render } from '@testing-library/react';
import { CardGrid } from './cardGrid';

jest.mock('../../../_hooks/useGetManageContextValue', () => ({
  useGetManageContextValue: jest.fn()
}));
import { useGetManageContextValue } from '../../../_hooks/useGetManageContextValue';
import { Actions } from '../../../_types/config/actions/actions';
import { CollectionConfig } from '../../../_types/config/collection/collectionConfig';
import { GridConfig } from '../../../_types/config/collection/grid/gridConfig';
import { TableConfig } from '../../../_types/config/collection/table/tableConfig';
import { TableField } from '../../../_types/config/collection/table/tableField';
import { FormConfig } from '../../../_types/config/form/formConfig';
import { ManageConfig } from '../../../_types/config/manageConfig';

jest.mock('./cardGridItem', () => ({
  CardGridItem: ({ item }) => <div data-testid="card-grid">{(item as any).name}</div>
}));

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

describe('CardGrid', () => {
  it('renders CardGrid component with CardGridItem for each item in fetchResult', () => {

    const fetchResult = {
      items: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' }
      ],
      count: 3
    };


    (useGetManageContextValue as jest.Mock<any, any, any>).mockReturnValue({
      state: { fetchResult },
      config
    });

    const {
      getByText
    } = render(<CardGrid />);


    fetchResult.items.forEach(item => {
      expect(getByText(item.name)).toBeInTheDocument();
    });
  });


});

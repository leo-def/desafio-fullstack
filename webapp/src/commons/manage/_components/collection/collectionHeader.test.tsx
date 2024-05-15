import React from 'react';
import { render } from '@testing-library/react';
import { CollectionHeader } from './collectionHeader';
import { Actions } from '../../_types/config/actions/actions';
import { CollectionConfig } from '../../_types/config/collection/collectionConfig';
import { GridConfig } from '../../_types/config/collection/grid/gridConfig';
import { TableConfig } from '../../_types/config/collection/table/tableConfig';
import { TableField } from '../../_types/config/collection/table/tableField';
import { FormConfig } from '../../_types/config/form/formConfig';
import { ManageConfig } from '../../_types/config/manageConfig';
import { SortOrderEnum } from '../../_enums/sortOrder.enum';



jest.mock('../../_hooks/useGetManageContextValue', () => ({
  useGetManageContextValue: jest.fn()
}));


jest.mock('../../_hooks/useSetManageCollectionView', () => ({
  useSetManageCollectionView: jest.fn()
}));


jest.mock('../../_hooks/useUpdateManageFetchParams', () => ({
  useUpdateManageFetchParams: jest.fn()
}));


jest.mock('../../_hooks/useSetManageAction', () => ({
  useSetManageAction: jest.fn()
}));

import { useGetManageContextValue } from '../../_hooks/useGetManageContextValue';

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
          Title: undefined,
          Display: undefined,
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
    onFetc: undefined
  } as Actions<Object>
} as ManageConfig<Object>

describe('CollectionHeader', () => {
  it('renders CollectionHeader component with pagination and buttons', () => {

    const fetchParams = {
      page: 1,
      limit: 5,
      sort: [{
        field: 'name',
        order: SortOrderEnum.ASC
      }],
      select: ['id', 'name'],
      filter: {
        name: 'Luis'
      }
    };
    const fetchResult = { count: 10, items: [] };
    const collectionView = 'CARD_GRID';


    (useGetManageContextValue as jest.Mock<any, any, any>).mockReturnValue({
      state: { fetchParams, fetchResult, collectionView },
      config
    });

    const { getByLabelText } = render(<CollectionHeader />);

    expect(getByLabelText('pagination')).toBeInTheDocument();
    expect(getByLabelText('grid collection view type')).toBeInTheDocument();
    expect(getByLabelText('add')).toBeInTheDocument();

  });


});

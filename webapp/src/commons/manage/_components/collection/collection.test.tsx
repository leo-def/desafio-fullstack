import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { Collection } from './collection';
import { Actions } from '../../_types/config/actions/actions';
import { CollectionConfig } from '../../_types/config/collection/collectionConfig';
import { GridConfig } from '../../_types/config/collection/grid/gridConfig';
import { TableConfig } from '../../_types/config/collection/table/tableConfig';
import { TableField } from '../../_types/config/collection/table/tableField';
import { FormConfig } from '../../_types/config/form/formConfig';
import { ManageConfig } from '../../_types/config/manageConfig';
import { SortOrderEnum } from '../../_enums/sortOrder.enum';

jest.mock('./table/table', () => ({
  Table: jest.fn(() => <div data-testid="table">Mock Table Component</div>)
}));
jest.mock('./grid/cardGrid', () => ({
  CardGrid: jest.fn(() => <div data-testid="card-grid">Mock CardGrid Component</div>)
}));
jest.mock('./collectionHeader', () => ({
  CollectionHeader: jest.fn(() => <div data-testid="collection-header">Mock CollectionHeader Component</div>)
}));

jest.mock('../../_hooks/useGetManageContextValue', () => ({
  useGetManageContextValue: jest.fn()
}));
import { useGetManageContextValue } from '../../_hooks/useGetManageContextValue';

jest.mock('../../_hooks/useSetManageFetchResult', () => ({
  useSetManageFetchResult: jest.fn().mockReturnValue(jest.fn())
}));





describe('Collection', () => {
  it('renders Collection component with CollectionHeader and either Table or CardGrid', async () => {
    
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
    const collectionView = 'TABLE'; 
    const action = 'COLLECTION'; 
    const onFetch = jest.fn().mockResolvedValue(fetchResult); 
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
        onFetch
      } as Actions<Object>
    } as ManageConfig<Object>
    
    (useGetManageContextValue as jest.Mock<any, any, any>).mockReturnValue({
      state: { fetchParams, fetchResult, collectionView, action },
      config
    });

    const { getByTestId, queryByTestId } = render(<Collection />);
    expect(getByTestId('collection-header')).toBeInTheDocument();
    if (collectionView === 'TABLE') {
      expect(getByTestId('table')).toBeInTheDocument();
      expect(queryByTestId('card-grid')).toBeNull();
    } else if (collectionView === 'CARD_GRID') {
      expect(getByTestId('card-grid')).toBeInTheDocument();
      expect(queryByTestId('table')).toBeNull();
    }
    await waitFor(() => {});

    
  });

  
});
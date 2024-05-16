import React from 'react';
import { render } from '@testing-library/react';
import { TableHeader } from './tableHeader';

jest.mock('../../../_hooks/useGetManageContextValue', () => ({
  useGetManageContextValue: jest.fn()
}));
import { useGetManageContextValue } from '../../../_hooks/useGetManageContextValue';
import { TableField } from '../../../_types/config/collection/table/tableField';

(useGetManageContextValue as jest.Mock<any, any, any>).mockReturnValue({
  state: { fetchParams: {}, fetchResult: {}, collectionView: undefined },
  config: {
    actions: { onDelete: undefined },
    disabled: false,
    collection: {
      table: {
        columns: [
          {
            field: 'id',
            label: 'ID',
            Title: undefined,
            Display: ({ item }) => <span>{(item as any).id}</span>,
          } as TableField<Object>,
          {
            field: 'name',
            label: 'Name',
            Title: undefined,
            Display: ({ item }) => <span>{(item as any).name}</span>,
          } as TableField<Object>,
        ], ActionsColumnDisplay: () => <span>Mock Actions Header Display</span>
      }
    }
  }
});

describe('TableHeader', () => {
  it('renders TableHeader component with TableHeaderColumn components', () => {

    const { getByRole, getAllByRole, getByText } = render(<div><TableHeader /></div>);

    const tableHeadElement = getByRole('row');
    expect(tableHeadElement).toBeInTheDocument();

    expect(getAllByRole('columnheader')).toHaveLength(3);

  });

  it('renders TableHeader component without ActionsHeaderDisplay component', () => {
   
    const { getByRole } = render(<div><TableHeader /></div>);

    const tableHeadElement = getByRole('row');
    expect(tableHeadElement).toBeInTheDocument();

  });

});
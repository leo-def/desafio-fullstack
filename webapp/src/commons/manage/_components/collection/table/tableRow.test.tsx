import React from 'react';
import { render } from '@testing-library/react';
import { TableRow } from './tableRow';

jest.mock('../../../_hooks/useGetManageContextValue', () => ({
  useGetManageContextValue: jest.fn()
}));
import { useGetManageContextValue } from '../../../_hooks/useGetManageContextValue';
import { TableField } from '../../../_types/config/collection/table/tableField';



(useGetManageContextValue as jest.Mock<any, any, any>).mockReturnValue({
  config: {
    actions: {  onDelete: undefined },
    disabled: false,
    collection: { table: {   columns: [
      {
        field: 'id',
        label: 'ID',
        Title: undefined,
        Display: ({item}) => <span>{(item as any).id}</span>,
      } as TableField<Object>,
      {
        field: 'name',
        label: 'Name',
        Title: undefined,
        Display: ({item}) => <span>{(item as any).name}</span>,
      } as TableField<Object>,
    ], ActionsColumnDisplay: () => <span>Mock Actions Column</span> } }
}
});

describe('TableRow', () => {
  it('renders TableRow component with provided columns and ActionsColumnDisplay', () => {
    

    const mockItem = {
      id: 1,
      name: 'Mock Item',
    };

    const {
      getByRole,
      getAllByRole,
      getByText
    } = render(
        <table>
          <tbody> <TableRow item={mockItem} index={0} /></tbody>
        </table>
    );

    const tableRowElement = getByRole('row');
    expect(tableRowElement).toBeInTheDocument();

    const tableCellElements = getAllByRole('cell');
    expect(tableCellElements).toHaveLength(3); 
    expect(getByText('1')).toBeInTheDocument();
    expect(getByText('Mock Item')).toBeInTheDocument();
    expect(getByText('Mock Actions Column')).toBeInTheDocument();
  });

  it('renders TableRow component with default ActionsColumnDisplay', () => {
    
    const mockItem = {
      id: 2,
      name: 'Another Mock Item',
    };

    const {
      getByRole,
      getAllByRole,
      getByText
    } = render(
      <TableRow item={mockItem} index={1} />,
      { wrapper: ({ children }) => (
        <table>
          <tbody>{children}</tbody>
        </table>
      )}
    );

    const tableRowElement = getByRole('row');
    expect(tableRowElement).toBeInTheDocument();

    const tableCellElements = getAllByRole('cell');
    expect(tableCellElements).toHaveLength(3); 
    expect(getByText('2')).toBeInTheDocument();
    expect(getByText('Another Mock Item')).toBeInTheDocument();
    expect(getByText('Mock Actions Column')).toBeInTheDocument();
  });

  
});
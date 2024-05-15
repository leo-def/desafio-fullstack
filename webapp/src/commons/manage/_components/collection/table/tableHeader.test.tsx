import React from 'react';
import { render } from '@testing-library/react';
import { TableHeader } from './tableHeader';

describe('TableHeader', () => {
  it('renders TableHeader component with TableHeaderColumn components', () => {
    const mockColumns = [
      { id: 1, label: 'Column 1' },
      { id: 2, label: 'Column 2' },
      { id: 3, label: 'Column 3' },
    ];
    const mockActionsHeaderDisplay = jest.fn(() => <span>Mock Actions Header Display</span>);

    const { getByRole, getAllByRole, getByText } = render(<TableHeader />);

    const tableHeadElement = getByRole('row', { name: 'table header' });
    expect(tableHeadElement).toBeInTheDocument();

    expect(getAllByRole('columnheader')).toHaveLength(mockColumns.length);

    const actionsHeaderDisplayElement = getByText('Mock Actions Header Display');
    expect(actionsHeaderDisplayElement).toBeInTheDocument();
    expect(mockActionsHeaderDisplay).toHaveBeenCalled();
  });

  it('renders TableHeader component without ActionsHeaderDisplay component', () => {
    const mockColumns = [
      { id: 1, label: 'Column 1' },
      { id: 2, label: 'Column 2' },
      { id: 3, label: 'Column 3' },
    ];
    const mockUseGetManageContextValue = jest.fn(() => ({
      config: {
        collection: {
          table: {
            columns: mockColumns,
          },
        },
      },
    }));

    const { getByRole, getAllByRole, queryByText } = render(<TableHeader />);

    const tableHeadElement = getByRole('row', { name: 'table header' });
    expect(tableHeadElement).toBeInTheDocument();

    expect(getAllByRole('columnheader')).toHaveLength(mockColumns.length);

    expect(queryByText('Mock Actions Header Display')).not.toBeInTheDocument();
  });

});
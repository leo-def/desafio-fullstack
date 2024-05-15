import React from 'react';
import { render } from '@testing-library/react';
import { TableRow } from './tableRow';

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
      <TableRow item={mockItem} index={0} />,
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
    expect(getByText('Mock Content 1')).toBeInTheDocument();
    expect(getByText('Mock Content 2')).toBeInTheDocument();
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
    expect(getByText('Mock Content 1')).toBeInTheDocument();
    expect(getByText('Mock Content 2')).toBeInTheDocument();
    expect(getByText('Default Actions Column')).toBeInTheDocument();
  });

  
});
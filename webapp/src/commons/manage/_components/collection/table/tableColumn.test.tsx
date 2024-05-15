import React from 'react';
import { render } from '@testing-library/react';
import { TableColumn } from './tableColumn';
import { ColumnDisplayProps } from '../../../_types/props/columnDisplayProps';

describe('TableColumn', () => {
  it('renders TableColumn component with Display component', () => {

    const mockItem = { id: 1, name: 'Item 1' };
    const mockColumn = {
      field: 'name',
      label: 'Name',
      Title: undefined,
      Display: (props: ColumnDisplayProps<any>) => <span>Mock Display - {props.index}</span>,
    };
    const mockIndex = 0;

    const {
      getByRole,
      getByText
    } = render(<TableColumn item={mockItem} column={mockColumn} index={mockIndex} />);

    const tableCellElement = getByRole('cell');
    expect(tableCellElement).toBeInTheDocument();

    const displayElement = getByText('Mock Display - 0');
    expect(displayElement).toBeInTheDocument();
  });

  it('renders TableColumn component without Display component', () => {

    const mockItem = { id: 1, name: 'Item 1' };
    const mockColumn = {
      field: 'name',
      label: 'Name',
      Title: undefined,
      Display: (props: ColumnDisplayProps<any>) => <span>Mock Display - {props.index}</span>,
    };
    const mockIndex = 0;

    const {
      getByRole,
      queryByText
    } = render(<TableColumn item={mockItem} column={mockColumn} index={mockIndex} />);

    const tableCellElement = getByRole('cell');
    expect(tableCellElement).toBeInTheDocument();

    const displayElement = queryByText('Mock Display');
    expect(displayElement).toBeNull();
  });


});
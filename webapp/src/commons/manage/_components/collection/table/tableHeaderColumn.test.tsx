import React from 'react';
import { render } from '@testing-library/react';
import { TableHeaderColumn } from './tableHeaderColumn';

describe('TableHeaderColumn', () => {
  it('renders TableHeaderColumn component with provided Title component', () => {
    const mockColumn = {
      label: 'Column 1',
      field: 'name',
      Title: () => <span>Mock Title</span>,
      Display: () => <span>Mock Display</span>
    };

    const {
      getByRole,
      getByText
    } = render(<TableHeaderColumn column={mockColumn} />);

    const tableHeaderColumnElement = getByRole('columnheader');
    expect(tableHeaderColumnElement).toBeInTheDocument();

    const titleElement = getByText('Mock Title');
    expect(titleElement).toBeInTheDocument();
  });

  it('renders TableHeaderColumn component without provided Title component', () => {
    const mockColumn = {
      label: 'Column 2',
      field: 'name',
      Title: () => <span>Mock Title</span>,
      Display: () => <span>Mock Display</span>
    }

    const {
      getByRole,
      queryByText
    } = render(<TableHeaderColumn column={mockColumn} />);

    const tableHeaderColumnElement = getByRole('columnheader');
    expect(tableHeaderColumnElement).toBeInTheDocument();

    expect(queryByText('Mock Title')).not.toBeInTheDocument();
  });

});
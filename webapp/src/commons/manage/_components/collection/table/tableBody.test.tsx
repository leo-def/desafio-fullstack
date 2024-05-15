import React from 'react';
import { render } from '@testing-library/react';
import { TableBody } from './tableBody';

jest.mock('../../../_hooks/useGetManageContextValue', () => ({
  useGetManageContextValue: () => ({
    state: { fetchResult: { items: [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }] } }
  })
}));

describe('TableBody', () => {
  it('renders TableBody component with items', () => {
    const {
      getByRole, getAllByRole
    } = render(<TableBody />);

    const tableBodyElement = getByRole('rowgroup');
    expect(tableBodyElement).toBeInTheDocument();

    const tableRows = getAllByRole('row');
    expect(tableRows).toHaveLength(2);
  });

});
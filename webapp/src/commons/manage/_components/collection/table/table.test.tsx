import React from 'react';
import { render } from '@testing-library/react';
import { Table } from './table';

describe('Table', () => {
  it('renders Table component', () => {
       const { getByRole } = render(<Table />);

        expect(getByRole('table')).toBeInTheDocument();
  });

  });
import React from 'react';
import { render } from '@testing-library/react';
import { MentorColumnDisplay } from './mentorColumnDisplay';

describe('MentorColumnDisplay', () => {
  it('should render column cell content correctly', () => {
    const column = {
      field: 'name',
      label: 'Name',
      Title: () => <span>Mock Title</span>,
      Display: () => <span>Mock Display</span>
    };
    const item = { name: 'John Doe' };

    const { getByText } = render(
      <MentorColumnDisplay index={1} column={column} item={item} />
    );

    expect(getByText('John Doe')).toBeInTheDocument();
  });

});
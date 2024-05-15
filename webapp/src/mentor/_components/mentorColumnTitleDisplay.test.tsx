import React from 'react';
import { render } from '@testing-library/react';
import { MentorColumnTitleDisplay } from './mentorColumnTitleDisplay';

describe('MentorColumnTitleDisplay', () => {
  it('should render column title correctly', () => {
    const column = {
      field: 'name',
      label: 'Name',
      Title: () => <span>Mock Title</span>,
      Display: () => <span>Mock Display</span>
    };
    const { getByText } = render(
      <MentorColumnTitleDisplay column={column} />
    );
    expect(getByText('Name')).toBeInTheDocument();
  });

});
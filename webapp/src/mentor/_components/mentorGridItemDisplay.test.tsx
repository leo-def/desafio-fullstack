import React from 'react';
import { render } from '@testing-library/react';
import { MentorGridItemDisplay } from './mentorGridItemDisplay';

describe('MentorGridItemDisplay', () => {
  it('renders MentorGridItemDisplay component with correct item name', () => {
    
    const item = {
      id: '1',
      name: 'John Doe',
      cpf: '12345678900',
      email: 'john@example.com',
    };

    const { getByText } = render(<MentorGridItemDisplay index={1} item={item} />);
    expect(getByText('John Doe')).toBeInTheDocument();
  });

  
});
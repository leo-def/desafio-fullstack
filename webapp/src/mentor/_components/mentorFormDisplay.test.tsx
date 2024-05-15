import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { MentorFormDisplay } from './mentorFormDisplay';

// Mock onSubmit function
const mockOnSubmit = jest.fn();

describe('MentorFormDisplay', () => {
  it('should render form fields and submit the form', async () => {
    const { getByLabelText, getByRole } = render(
      <MentorFormDisplay id="mentor-form" onSubmit={mockOnSubmit} />
    );

    fireEvent.change(getByLabelText('Name'), { target: { value: 'John Doe' } });
    fireEvent.change(getByLabelText('CPF'), { target: { value: '12345678900' } });
    fireEvent.change(getByLabelText('Email'), { target: { value: 'john@example.com' } });

    // Submit the form
    fireEvent.submit(getByRole('form'));

    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalledWith({
        id: '',
        name: 'John Doe',
        cpf: '12345678900',
        email: 'john@example.com',
      });
    });
  });

});
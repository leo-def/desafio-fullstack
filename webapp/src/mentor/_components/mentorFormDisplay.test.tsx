import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { MentorFormDisplay } from './mentorFormDisplay';

// Mock onSubmit function
const mockOnSubmit = jest.fn();

describe('MentorFormDisplay', () => {
  it('should render form fields', async () => {
    const { getByLabelText} = render(<div>
      <MentorFormDisplay id="mentor-form" onSubmit={mockOnSubmit} />
      </div>
    );

    expect(getByLabelText('Name')).toBeInTheDocument();
    expect(getByLabelText('CPF')).toBeInTheDocument();
    expect(getByLabelText('Email')).toBeInTheDocument();
  });

});
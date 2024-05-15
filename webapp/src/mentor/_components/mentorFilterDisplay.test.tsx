import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MentorFilterDisplay } from './mentorFilterDisplay';

describe('MentorFilterDisplay', () => {
  it('should render without errors', () => {
    const { container } = render(
      <MentorFilterDisplay
        id="mentor-filter"
        values={{}} 
        onChange={jest.fn()} 
        disabled={false} 
      />
    );
    expect(container).toBeInTheDocument();
  });

  it('should call onChange function when filter values change', () => {
    const onChangeMock = jest.fn();
    const { getByLabelText } = render(
      <MentorFilterDisplay
        id="mentor-filter"
        values={{}} 
        onChange={onChangeMock}
        disabled={false}
      />
    );
    
    fireEvent.change(getByLabelText('Nome'), { target: { value: 'John Doe' } });
    expect(onChangeMock).toHaveBeenCalledWith({ name: 'John Doe' });  
  });

  it('should disable filter elements when disabled prop is true', () => {
    const { getByLabelText } = render(
      <MentorFilterDisplay
        id="mentor-filter"
        values={{}} 
        onChange={jest.fn()} 
        disabled={true} 
      />
    );
    expect(getByLabelText('Nome')).toBeDisabled();
    
  });
  
});
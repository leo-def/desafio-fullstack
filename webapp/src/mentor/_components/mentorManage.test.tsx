import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { MentorManage } from './mentorManage';


jest.mock("../../commons/manage/_components/manage", () => ({
  Manage: () => <div data-testid="manage" >Mock Manage</div>
}))
jest.mock("./mentorFilterDisplay", () => ({
  MentorFilterDisplay: () => <div data-testid="mentor-filter-display" >Mock MentorFilterDisplay</div>
}))
jest.mock("./mentorFormDisplay", () => ({
  MentorFormDisplay: () => <div data-testid="mentor-form-display" >Mock MentorFormDisplay</div>
}))
jest.mock("./mentorGridItemDisplay", () => ({
  MentorGridItemDisplay: () => <div data-testid="mentor-gridItem-display" >Mock MentorGridItemDisplay</div>
}))
jest.mock("./mentorColumnDisplay", () => ({
  MentorColumnDisplay: () => <div data-testid="mentor-column-display" >Mock MentorColumnDisplay</div>
}))
jest.mock("./mentorColumnTitleDisplay", () => ({
  MentorColumnTitleDisplay: () => <div data-testid="mentor-columnTitle-display" >Mock MentorColumnTitleDisplay</div>
}))

// Mock the useApiFetch hook
jest.mock('../../commons/api/_hooks/useApiFetch', () => ({
  useApiFetch: jest.fn(),
}));

describe('MentorManage', () => {
  beforeEach(() => {
    // Reset the mock implementation before each test
    jest.clearAllMocks();
  });

  it('should render MentorManage component with disabled props', async () => {
    // Mock the API fetch function
    const mockedApiFetch = jest.fn();
    mockedApiFetch.mockResolvedValueOnce({
      data: {
        items: [
          { id: 1, name: 'John Doe', cpf: '12345678901', email: 'john@example.com' },
          { id: 2, name: 'Jane Doe', cpf: '23456789012', email: 'jane@example.com' },
        ],
        count: 2,
      },
    });
    mockedApiFetch.mockResolvedValueOnce(undefined); // Mock onDelete function response

    // Provide the mocked API fetch function to the component
    require('../../commons/api/_hooks/useApiFetch').useApiFetch.mockReturnValue(mockedApiFetch);

    // Render the MentorManage component with disabled props
    const { getByText } = render(<MentorManage disabled={true} />);

    // Wait for the component to fetch data
    await waitFor(() => {
      // Check if the component renders the mentor names
      expect(getByText('John Doe')).toBeInTheDocument();
      expect(getByText('Jane Doe')).toBeInTheDocument();
    });
  });
});

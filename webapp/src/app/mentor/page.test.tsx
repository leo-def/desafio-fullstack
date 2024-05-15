import React from 'react';
import { render } from '@testing-library/react';
import MentorPage from './page';

jest.mock('../../mentor/_components/mentorManage', () => ({
  MentorManage: jest.fn(() => <div data-testid="mentor-manage">Mock MentorManage Component</div>)
}));

describe('MentorPage', () => {
  it('renders MentorManage component', () => {
    const { getByTestId } = render(<MentorPage />);
    const mentorManageComponent = getByTestId('mentor-manage');
    expect(mentorManageComponent).toBeInTheDocument();
  });
});
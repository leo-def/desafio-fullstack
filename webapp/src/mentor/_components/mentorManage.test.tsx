import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { MentorManage } from './mentorManage';

/*
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
*/

jest.mock('../../commons/manage/_hooks/useGetManageContextValue', () => ({
  useGetManageContextValue: jest.fn()
}));
import { useGetManageContextValue } from '../../commons/manage/_hooks/useGetManageContextValue';
import { Actions } from '../../commons/manage/_types/config/actions/actions';
import { CollectionConfig } from '../../commons/manage/_types/config/collection/collectionConfig';
import { GridConfig } from '../../commons/manage/_types/config/collection/grid/gridConfig';
import { TableConfig } from '../../commons/manage/_types/config/collection/table/tableConfig';
import { TableField } from '../../commons/manage/_types/config/collection/table/tableField';
import { FormConfig } from '../../commons/manage/_types/config/form/formConfig';
import { ManageConfig } from '../../commons/manage/_types/config/manageConfig';
import { ActionEnum } from '../../commons/manage/_enums/action.enum';
import { CollectionViewEnum } from '../../commons/manage/_enums/collectionView.enum';

const config = {
  disabled: false,
  collection: {
    grid: {
      ItemDisplay: undefined,
    } as GridConfig<Object>,
    table: {
      columns: [
        {
          field: 'id',
          label: 'ID',
          Title: () => <span>ID</span>,
          Display: ({item}) => <span>{(item as any).id}</span>,
        } as TableField<Object>,
        {
          field: 'name',
          label: 'Name',
          Title: () => <span>Name</span>,
          Display: ({item}) => <span>{(item as any).name}</span>,
        } as TableField<Object>,
      ]
    } as TableConfig<Object>,
    filter: {
      id: 'mentor-filter-form',
      map: undefined,
      disabled: false,
      Display: undefined,
      limitInputLabel: 'Rows per page'
    }
  } as CollectionConfig<Object>,
  form: {
    id: 'mentor-form',
    onSubmit: undefined,
    Display: undefined,
    disabled: false
  } as FormConfig<Object>,
  actions: {
    onDelete: undefined,
    onFetch: undefined
  } as Actions<Object>
} as ManageConfig<Object>

(useGetManageContextValue as jest.Mock<any, any, any>).mockReturnValue({
  
  state: {
    action: ActionEnum.COLLECTION,
    selected: undefined, 
    fetchParams: {},
    fetchResult:  {
      items: [
        { id: 1, name: 'John Doe', cpf: '12345678901', email: 'john@example.com' },
        { id: 2, name: 'Jane Doe', cpf: '23456789012', email: 'jane@example.com' },
      ],
      count: 2,
    },
    collectionView: CollectionViewEnum.TABLE
  },
  config
});

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

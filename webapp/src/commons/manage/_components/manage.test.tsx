import { render } from '@testing-library/react';
import { Manage } from './manage';
import { Actions } from '../_types/config/actions/actions';
import { CollectionConfig } from '../_types/config/collection/collectionConfig';
import { GridConfig } from '../_types/config/collection/grid/gridConfig';
import { TableConfig } from '../_types/config/collection/table/tableConfig';
import { TableField } from '../_types/config/collection/table/tableField';
import { FormConfig } from '../_types/config/form/formConfig';
import { ManageConfig } from '../_types/config/manageConfig';

jest.mock('./manageContent', () => ({
  ManageContent: jest.fn(() => <div data-testid="manage-content" >Mock ManageContent Component</div>)
}));

jest.mock('./manageContextProvider', () => ({
  ManageContextProvider: jest.fn(({ children }) => <div data-testid="manage-context-provider">Mock ManageContextProvider Component {children}</div>)
}));


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
          Title: undefined,
          Display: undefined,
        } as TableField<Object>,
        {
          field: 'name',
          label: 'Name',
          Title: undefined,
          Display: undefined,
        } as TableField<Object>
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

describe('Manage', () => {
  it('renders ManageContent component', () => {
    const { getByTestId } = render(<Manage config={config} />);
    const manageContentComponent = getByTestId('manage-content');
    expect(manageContentComponent).toBeInTheDocument();
  });
  
  it('renders ManageContextProvider component', () => {
    const { getByTestId } = render(<Manage config={config} />);
    const manageContextProviderComponent = getByTestId('manage-context-provider');
    expect(manageContextProviderComponent).toBeInTheDocument();
  });
});
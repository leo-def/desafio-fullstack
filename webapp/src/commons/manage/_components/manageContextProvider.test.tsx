import React from 'react';
import { render } from '@testing-library/react';
import { ManageContextProvider } from './manageContextProvider';
import { Actions } from '../_types/config/actions/actions';
import { CollectionConfig } from '../_types/config/collection/collectionConfig';
import { GridConfig } from '../_types/config/collection/grid/gridConfig';
import { TableConfig } from '../_types/config/collection/table/tableConfig';
import { TableField } from '../_types/config/collection/table/tableField';
import { FormConfig } from '../_types/config/form/formConfig';
import { ManageConfig } from '../_types/config/manageConfig';
import { ActionEnum } from '../_enums/action.enum';
import { CollectionViewEnum } from '../_enums/collectionView.enum';
import { ManageStatusState } from '../_types/status/manageStatusState';



jest.mock('../_contexts/manageContext', () => ({
  ManageContext: { Provider: jest.fn(({ children, value}) => <div data-testid="manage-context-provider" data-testvalue={JSON.stringify(value)}>{children}</div>)}
}));


export const initialState = {
  selected: undefined,
  action: ActionEnum.COLLECTION,
  collectionView: CollectionViewEnum.TABLE,
  fetchParams: {
    page: 0,
  },
  fetchResult: undefined,
} as ManageStatusState<any>;

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
      onFetc: undefined
  } as Actions<Object>
} as ManageConfig<Object>

describe('ManageContextProvider', () => {
  it('renders children and provides ManageContext value', () => {

    const { getByTestId } = render(<div>
      <ManageContextProvider config={config}>
        <ChildComponent />
      </ManageContextProvider>
      </div>
    );

    expect(getByTestId('child-component')).toBeInTheDocument();

    const manageContextProvider = getByTestId('manage-context-provider');
    expect(manageContextProvider).toBeInTheDocument();

    expect(manageContextProvider).toHaveAttribute('data-testvalue', JSON.stringify({ state: initialState, config }));
  });
});

const ChildComponent = () => {
  return <div data-testid="child-component">Child Component</div>;
};
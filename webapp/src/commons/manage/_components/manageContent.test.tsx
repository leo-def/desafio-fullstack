import React from 'react';
import { render } from '@testing-library/react';
import { ManageContent } from './manageContent';
import { ActionEnum } from '../_enums/action.enum';
jest.mock('../_hooks/useGetManageContextValue', () => ({
  useGetManageContextValue: jest.fn()
}));
import { useGetManageContextValue } from '../_hooks/useGetManageContextValue';


jest.mock('./collection/collection', () => ({
  Collection: jest.fn(() => <div data-testid="collection-component">Mock Collection Component</div>)
}));

jest.mock('./form/formCard', () => ({
  FormCard: jest.fn(() => <div data-testid="form-card-component">Mock FormCard Component</div>)
}));


describe('ManageContent', () => {
  it('renders Collection component and FormCard component within Modal when action is EDIT, CREATE, or SHOW', () => {
    (useGetManageContextValue as jest.Mock<any, any, any>).mockReturnValue({
      state: {
        action: ActionEnum.EDIT,
        selected: {}
      }
    });

    const { getByTestId } = render(<ManageContent />);

    expect(getByTestId('collection-component')).toBeInTheDocument();
    expect(getByTestId('dialog-component')).toBeInTheDocument();
    expect(getByTestId('form-card-component')).toBeInTheDocument();
  });

  it('renders only Collection component when action is not EDIT, CREATE, or SHOW', () => {
    (useGetManageContextValue as jest.Mock<any, any, any>).mockReturnValue({
      state: {
        action: ActionEnum.COLLECTION,
        selected: {} 
      }
    });

    const { getByTestId } = render(<ManageContent />);

    expect(getByTestId('collection-component')).toBeInTheDocument();
    expect(getByTestId('dialog-component')).toBeNull();
    expect(getByTestId('form-card-component')).toBeNull();
  });
});

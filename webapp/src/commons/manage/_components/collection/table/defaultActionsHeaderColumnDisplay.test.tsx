import React from 'react';
import { render } from '@testing-library/react';
import { DefaultActionsHeaderColumnDisplay } from './defaultActionsHeaderColumnDisplay';
 
jest.mock('../../../_hooks/useGetManageContextValue', () => ({
  useGetManageContextValue: jest.fn()
}));
import { useGetManageContextValue } from '../../../_hooks/useGetManageContextValue';

describe('DefaultActionsHeaderColumnDisplay', () => {
  it('renders DefaultActionsHeaderColumnDisplay component with label', () => {
    const actionsHeaderColumnLabel = 'Actions';

    (useGetManageContextValue as jest.Mock<any, any, any>).mockReturnValue({
      config: {
        collection: {
          table: { actionsHeaderColumnLabel }
        }
      }
    });

    const { getByText } = render(<DefaultActionsHeaderColumnDisplay />);

    expect(getByText(actionsHeaderColumnLabel)).toBeInTheDocument();
  });

});
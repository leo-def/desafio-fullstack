import { ActionEnum } from "../_enums/action.enum";
import { CollectionViewEnum } from "../_enums/collectionView.enum";
import { ManageStatusState } from "../_types/status/manageStatusState";

export const initialState = {
  selected: undefined,
  action: ActionEnum.COLLECTION,
  collectionView: CollectionViewEnum.TABLE,
  fetchParams: {
    page: 0,
  },
  fetchResult: undefined,
} as ManageStatusState<any>;

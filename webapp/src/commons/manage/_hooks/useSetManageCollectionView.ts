import { useContext } from "react";
import { ManageContext } from "../_contexts/manageContext";
import { ManageStatusActionEnum } from "../_enums/manageStatusAction.enum";
import { CollectionViewEnum } from "../_enums/collectionView.enum";

export function useSetManageCollectionView(): (
  collectionView: CollectionViewEnum
) => void {
  const { dispatch } = useContext(ManageContext);
  return (collectionView: CollectionViewEnum) => {
    if (dispatch) {
      dispatch({
        type: ManageStatusActionEnum.SET_COLLECTION_VIEW,
        payload: { collectionView },
      });
    }
  };
}

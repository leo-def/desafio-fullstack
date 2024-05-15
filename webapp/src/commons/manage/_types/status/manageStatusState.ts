import { CollectionViewEnum } from "@/manage/_enums/collectionView.enum";
import { ActionEnum } from "../../_enums/action.enum";
import { FetchResult } from "./fetchResult";
import { FetchParams } from "./params/fetchParams";

export interface ManageStatusState<T> {
  selected?: T;
  action: ActionEnum;
  fetchParams?: FetchParams;
  fetchResult?: FetchResult<T>;
  collectionView: CollectionViewEnum;
}

import { ComponentType } from "react";
import { FilterDisplayProps } from "../../../props/filterDisplayProps";
import { FetchParams } from "../../../status/params/fetchParams";

export interface CollectionFilterConfig {
  id: string;
  map?: (param?: FetchParams) => Promise<any>;
  disabled?: boolean;
  Display: ComponentType<FilterDisplayProps> | undefined;
  pageOptions?: Array<number>;
  limitInputLabel?: string
}

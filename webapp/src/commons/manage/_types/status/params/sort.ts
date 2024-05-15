import { SortOrderEnum } from "../../../_enums/sortOrder.enum";

export interface Sort {
  field: string;
  order: SortOrderEnum;
}

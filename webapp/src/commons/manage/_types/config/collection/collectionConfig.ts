import { GridConfig } from "./grid/gridConfig";
import { TableConfig } from "./table/tableConfig";
import { CollectionFilterConfig } from "./filter/collectionFilterConfig";

export interface CollectionConfig<T> {
  grid: GridConfig<T>;
  table: TableConfig<T>;
  filter: CollectionFilterConfig;
}

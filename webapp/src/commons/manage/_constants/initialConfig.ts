import { CollectionViewEnum } from "../_enums/collectionView.enum";
import { Actions } from "../_types/config/actions/actions";
import { CollectionConfig } from "../_types/config/collection/collectionConfig";
import { CollectionFilterConfig } from "../_types/config/collection/filter/collectionFilterConfig";
import { GridConfig } from "../_types/config/collection/grid/gridConfig";
import { TableConfig } from "../_types/config/collection/table/tableConfig";
import { FormsConfig } from "../_types/config/form/formsConfig";
import { ManageConfig } from "../_types/config/manageConfig";

export const initialConfig = {
  collection: {
    view: CollectionViewEnum.TABLE,
    grid: {
      ItemDisplay: undefined,
    } as  GridConfig<any>,
    table: {
      columns: [],
      actionsHeaderColumnLabel: undefined,
      ActionsHeaderColumnDisplay: undefined,
      ActionsColumnDisplay: undefined
    } as TableConfig<any>,
    filter: {
        id: 'manage-collection-filter-id',
        map: undefined,
        disabled: undefined,
        Display: undefined,
        pageOptions: undefined,
        limitInputLabel: undefined,
    } as CollectionFilterConfig
  } as CollectionConfig<any>,
  form: {
    id: 'manage-form-id',
    map: undefined,
    Display: undefined,
    onSubmit: undefined,
    disabled: undefined,
    actionOnSubmit: undefined,
  } as FormsConfig<unknown>,
  actions: {
    onUpdate: undefined,
    onCreate: undefined,
    onDelete: undefined,
    onFetch: undefined,
  } as Actions<unknown>,
} as ManageConfig<unknown>;

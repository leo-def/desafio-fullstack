import { Actions } from "./actions/actions";
import { CollectionConfig } from "./collection/collectionConfig";
import { FormsConfig } from "./form/formsConfig";

export interface ManageConfig<T> {
  collection: CollectionConfig<T>;
  form: FormsConfig<T>;
  actions: Actions<T>;
  disabled?: boolean;
}

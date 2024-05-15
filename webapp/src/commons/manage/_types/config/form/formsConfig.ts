import { FormConfig } from "./formConfig";

export type FormsConfig<T> =
  | FormConfig<T>
  | {
      update?: FormConfig<T>;
      create?: FormConfig<T>;
    };

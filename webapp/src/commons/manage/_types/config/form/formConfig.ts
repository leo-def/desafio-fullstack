import { ComponentType } from "react";
import { ActionEnum } from "../../../_enums/action.enum";
import { FormDisplayProps } from "../../props/formDisplayProps";

export interface FormConfig<T> {
  id: string;
  map?: (param: T) => Promise<T>;
  Display: ComponentType<FormDisplayProps<T>> | undefined;
  onSubmit?: (item: T, action: ActionEnum) => Promise<T | undefined>;
  disabled?: boolean;
  actionOnSubmit?: ActionEnum;
}

import { FetchParams } from "../status/params/fetchParams";

export interface FilterDisplayProps {
  readonly id: string;
  readonly values?: any;
  readonly onChange?: (item: Partial<FetchParams>) => Promise<void>;
  readonly disabled?: boolean;
}

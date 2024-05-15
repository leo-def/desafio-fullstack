export interface FormDisplayProps<T> {
  readonly values?: T;
  readonly disabled?: boolean;
  readonly onSubmit?: (param: T) => Promise<T>;
  readonly id: string;
}

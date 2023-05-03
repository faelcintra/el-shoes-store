import { FieldErrors } from "react-hook-form";
import { UseFormGetValues } from "react-hook-form/dist/types";
import { IAuth } from "./IAuth";

export interface InputProps extends React.ComponentProps<"input"> {
  label?: string;
  getValues?: UseFormGetValues<IAuth>;
  profile?: boolean;
  placeholder?: string;
  fieldName: keyof IAuth;
  register: (fieldName: string) => {};
  errors?: FieldErrors<IAuth>;
  type?: string;
  edit?: boolean;
}

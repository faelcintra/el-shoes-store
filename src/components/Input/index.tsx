import { IAuth } from "../../interfaces/IAuth";
import { FieldErrors } from "react-hook-form/dist/types";

type InputProps = {
  placeholder: string;
  onChange?: () => void;
  fieldName: keyof IAuth;
  register: (fieldName: string) => {};
  errors?: FieldErrors<IAuth>;
};

export function Input({
  placeholder,
  onChange,
  register,
  fieldName,
  errors,
}: InputProps) {
  return (
    <div>
      <input
        placeholder={placeholder}
        onChange={onChange}
        {...register(fieldName)}
        className="border-[calc(1px)] mb-4 focus:border-gray-900 pl-2 focus:placeholder:text-gray-300 outline-none border-gray-200 bg-white rounded-sm py-2 w-full "
      />
      {errors?.[fieldName]?.message}
    </div>
  );
}

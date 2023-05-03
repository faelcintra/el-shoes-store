import { FieldErrors } from "react-hook-form/dist/types";
import { IAuth } from "../../interfaces/IAuth";
import { InputProps } from "../../interfaces/IInput";

export function InputCheck({ label, errors, register, fieldName }: InputProps) {
  return (
    <div className="flex  flex-row gap-2 items-start text-left ">
      <input
        type="checkbox"
        {...register(fieldName)}
        className="w-6 h-6 items-center mt-1 "
      />
      <div className="flex flex-col">
        <span className="text-[calc(17px)] text-left text-gray-600">
          {label}
        </span>
        <span className="text-red-500">{errors?.registered?.message}</span>
      </div>
    </div>
  );
}

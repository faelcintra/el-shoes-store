import { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import classNames from "classnames";

import { InputProps } from "../../interfaces/IInput";

export function Input({
  placeholder,
  label,
  value,
  edit,
  onChange,
  register,
  fieldName,
  errors,
  type,
}: InputProps) {
  const [isEdit, setIsEdit] = useState(true);
  console.log("is edit", isEdit);

  return (
    <div className="mb-4 flex items-end w-full">
      <div className="w-full">
        <label children={label} className="w-36" />
        <input
          disabled={isEdit}
          defaultValue={value}
          onChange={onChange}
          type={type}
          placeholder={placeholder}
          {...register(fieldName)}
          className={classNames(
            "border-[calc(1px)] w-full focus:border-b-gray-900 pl-2 focus:placeholder:text-gray-300 outline-none border-gray-200 rounded-sm py-2",
            {
              "border-b-red-500 focus:border-b-red-500 focus:border-gray-200":
                !!errors?.[fieldName]?.message,
              "bg-gray-100": !!isEdit,
            }
          )}
        />
      </div>
      {edit && (
        <button onClick={() => setIsEdit((state) => !state)}>
          <AiOutlineEdit size={24} className="ml-2" />
        </button>
      )}
      <span className="text-red-500 text-sm">
        {errors?.[fieldName]?.message}
      </span>
    </div>
  );
}

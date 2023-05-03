import { HTMLAttributes } from "react";
import classNames from "classnames";

type ButtonProps = {
  variant?: boolean;
} & HTMLAttributes<HTMLButtonElement>;

export function Button({ variant = false, children, ...rest }: ButtonProps) {
  return (
    <div>
      <button
        type={"button"}
        {...rest}
        className={classNames(
          `${
            variant
              ? "mt-8 bg-zinc-900 w-full py-2 text-gray-100 hover:text-gray-300 hover:transition-all active:text-zinc-900 active:border-zinc-900 active:bg-white border-zinc-900 border-[calc(1px)]"
              : "bg-white w-[calc(10vw)] py-2 border-gray-200 active:border-gray-900 border-[calc(1px)]"
          } `
        )}
        children={children}
      />
    </div>
  );
}

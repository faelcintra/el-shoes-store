import classNames from "classnames";
import { freightProps } from "../../context/ShoppingContext";
import { BsCheckLg } from "react-icons/bs";

export function FreightCard({
  frete,
  handleCheck,
}: {
  frete: freightProps;
  handleCheck: (freight: freightProps) => void;
}) {
  return (
    <button
      onClick={() => handleCheck(frete)}
      disabled={frete.disabled}
      className={classNames(
        "h-[calc(8vh)] text-start flex flex-row items-center border-[calc(1px)] border-gray-200",
        {
          "border-lime-500 border-b-4 bg-white": !!frete.checked,
          "text-gray-400": !!frete.disabled,
        }
      )}
    >
      <div
        className={classNames(
          "bg-gray-100 h-full w-[calc(2vw)] flex items-center justify-center",
          {
            "bg-lime-500": !!frete.checked,
          }
        )}
      >
        <label className="flex items-center justify-center w-full h-full ">
          <input
            type="checkbox"
            className="w-4 h-4 hidden"
            defaultChecked={frete.checked}
          />

          {!!frete.checked ? (
            <BsCheckLg className="text-gray-100" size={18} />
          ) : (
            <span
              className={classNames(
                "bg-gray-100 w-4 h-4 border-gray-900 border-2 "
              )}
            />
          )}
        </label>
      </div>

      <div className="w-full px-2">
        <span
          className={classNames("font-semibold italic", {
            "text-lime-500": !!frete.checked,
          })}
          children={frete.freight}
        />
        <div className="flex flex-row w-full justify-between">
          <span className="text-sm" children={frete.prevision} />
          <span
            className="font-semibold"
            children={
              typeof frete.amount !== "string" ? "R$ " + frete.amount : "Grátis"
            }
          />
        </div>
      </div>
    </button>
  );
}

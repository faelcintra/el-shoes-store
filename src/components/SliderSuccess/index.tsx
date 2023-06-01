import * as Slider from "@radix-ui/react-slider";
import "./styles.css";
import { BsCheckLg } from "react-icons/bs";

export function SliderSuccess({
  success,
  min,
}: {
  success: boolean;
  min: boolean;
}) {
  const condSuccess = success ? 70 : 0;
  const condSuccess2 = success && min ? 100 : 0;
  const morfSuccess = condSuccess | condSuccess2;
  return (
    <form className="">
      <Slider.Root
        className="SliderRoot w-[calc(28vw)] mt-8"
        disabled
        defaultValue={[0]}
        value={[morfSuccess]}
        max={100}
        step={1}
      >
        <Slider.Track className="SliderTrack bg-gray-300 h-3">
          <Slider.Range className="SliderRange bg-lime-500 " />
        </Slider.Track>
        <Slider.Thumb
          className="SliderThumb bg-lime-500 flex justify-center 
        items-center h-8 w-8 rounded-full"
          aria-label="Volume"
        >
          <BsCheckLg className="text-gray-100" size={30} />
        </Slider.Thumb>
      </Slider.Root>
    </form>
  );
}

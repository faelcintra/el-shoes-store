import * as Slider from "@radix-ui/react-slider";
import "./styles.css";
import { GiCheckMark } from "react-icons/gi";

export const SliderSuccess = () => (
  <form>
    <Slider.Root
      className="SliderRoot w-[calc(25vw)] mt-6"
      disabled
      defaultValue={[100]}
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
        <GiCheckMark className="text-gray-100" size={18} />
      </Slider.Thumb>
    </Slider.Root>
  </form>
);

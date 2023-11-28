'use client'

import { Slider, SliderProps } from "@nextui-org/react";

interface Props extends SliderProps {
  maxValue: number;
  value: number;
}

export default function MarkSlider({ maxValue, value, ...props }: Props) {
  return (
    <Slider
      color="foreground"
      hideThumb={true}
      value={value}
      maxValue={maxValue}
      getValue={(value) => `${value} / ${maxValue}`}
      {...props}
    />
  )
}
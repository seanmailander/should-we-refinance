import React from "react";
import { Slider } from "./slider";

export const Present = (props) => {
  const { remaining, setRemaining } = props;

  return (
    <section className="control-panel">
      <Slider
        fieldName="remaining"
        currentValue={remaining}
        min={200000}
        max={400000}
        step={20000}
        defaultValue={320000}
        handleInputChange={setRemaining}
      ></Slider>
    </section>
  );
};

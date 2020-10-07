import React from "react";
import { Slider } from "./slider";

export const Present = (props) => {
  const { loan, remaining, setRemaining } = props;

  return (
    <section className="control-panel">
      <Slider
        fieldName="remaining"
        currentValue={remaining}
        min={100000}
        max={loan}
        step={20000}
        defaultValue={loan - 20000}
        handleInputChange={setRemaining}
      ></Slider>
    </section>
  );
};

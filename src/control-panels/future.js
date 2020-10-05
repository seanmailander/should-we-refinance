import React from "react";
import { Slider } from "./slider";

export const Future = (props) => {
  const { newTerm, setNewTerm, newRate, setNewRate } = props;

  return (
    <section className="control-panel">
      <Slider
        fieldName="newTerm"
        currentValue={newTerm}
        min={15}
        max={30}
        step={15}
        defaultValue={15}
        handleInputChange={setNewTerm}
      ></Slider>
      <Slider
        fieldName="newRate"
        currentValue={newRate}
        min={2}
        max={5}
        step={0.1}
        defaultValue={2.7}
        handleInputChange={setNewRate}
      ></Slider>
    </section>
  );
};

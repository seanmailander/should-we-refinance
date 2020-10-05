import React from "react";
import { Slider } from "./slider";

export const Past = (props) => {
  const {
    purchaseDate,
    setPurchaseDate,
    loan,
    setLoan,
    term,
    setTerm,
    rate,
    setRate,
  } = props;

  return (
    <section className="control-panel">
      <Slider
        fieldName="purchaseDate"
        currentValue={purchaseDate}
        min={1000}
        max={20000}
        step={1000}
        defaultValue={15000}
        handleInputChange={setPurchaseDate}
      ></Slider>
      <Slider
        fieldName="loan"
        currentValue={loan}
        min={200000}
        max={400000}
        step={20000}
        defaultValue={340000}
        handleInputChange={setLoan}
      ></Slider>
      <Slider
        fieldName="term"
        currentValue={term}
        min={15}
        max={30}
        step={15}
        defaultValue={30}
        handleInputChange={setTerm}
      ></Slider>
      <Slider
        fieldName="rate"
        currentValue={rate}
        min={2}
        max={5}
        step={0.1}
        defaultValue={4.7}
        handleInputChange={setRate}
      ></Slider>
    </section>
  );
};

import React, { useRef } from "react";
import Picker from "react-month-picker";

import { Slider } from "./slider";
import { DateTime } from "luxon";

const luxonFromPicker = (month) =>
  DateTime.fromISO(
    `2020-${month.toLocaleString(undefined, {
      minimumIntegerDigits: 2,
    })}-01`
  );

const getMonth = (i) => luxonFromPicker(i + 1).monthLong;
const months = [...Array(12).keys()].map(getMonth);

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
  const monthPicker = useRef(null);

  const selectANewMonth = (year, month) => {
    setPurchaseDate({ year, month });
    monthPicker.current.dismiss();
  };

  return (
    <section className="control-panel">
      The Past
      <Picker
        ref={monthPicker}
        years={30}
        value={purchaseDate}
        lang={months}
        onChange={selectANewMonth}
      >
        <button onClick={() => monthPicker.current.show()}>
          Loan started{" "}
          {`${months[purchaseDate.month - 1]} ${purchaseDate.year}`}
        </button>
      </Picker>
      <Slider
        fieldName="Loan amount"
        currentValue={loan}
        min={200000}
        max={400000}
        step={20000}
        defaultValue={340000}
        handleInputChange={setLoan}
      ></Slider>
      <Slider
        fieldName="Years"
        currentValue={term}
        min={15}
        max={30}
        step={15}
        defaultValue={30}
        handleInputChange={setTerm}
      ></Slider>
      <Slider
        fieldName="Interest rate"
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

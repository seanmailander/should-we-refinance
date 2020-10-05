import React from "react";

export const Slider = (props) => {
  const {
    fieldName,
    currentValue,
    min,
    max,
    step,
    defaultValue,
    handleInputChange,
  } = props;
  return (
    <section className="slider">
      <span>{currentValue}</span>
      <input
        type="range"
        className="slider"
        id={{ fieldName }}
        min={min}
        max={max}
        step={step}
        defaultValue={defaultValue}
        onChange={(event) =>
          handleInputChange(
            parseFloat(event.target.value)
          )
        }
      />
      <label htmlFor={fieldName}>{fieldName}</label>
    </section>
  );
};

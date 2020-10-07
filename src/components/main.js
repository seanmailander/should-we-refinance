import React, { useState } from "react";
import { Past } from "../control-panels/past";
import { Present } from "../control-panels/present";
import { Future } from "../control-panels/future";
import { Results } from "./results";
import { DateTime } from "luxon";

const luxonFromPicker = ({ year, month }) =>
  DateTime.fromISO(
    `${year}-${month.toLocaleString(undefined, {
      minimumIntegerDigits: 2,
    })}-01`
  );

export const Main = () => {
  // The past
  const [purchaseDate, setPurchaseDate] = useState({ year: 2018, month: 1 });
  const [loan, setLoan] = useState(375000);
  const [term, setTerm] = useState(30);
  const [rate, setRate] = useState(4.2);

  // The present
  const [remaining, setRemaining] = useState(375000);

  // The future
  const [newTerm, setNewTerm] = useState(15);
  const [newRate, setNewRate] = useState(2.7);

  return (
    <React.Fragment>
      <section className="controls">
        <Past
          purchaseDate={purchaseDate}
          setPurchaseDate={setPurchaseDate}
          loan={loan}
          setLoan={setLoan}
          term={term}
          setTerm={setTerm}
          rate={rate}
          setRate={setRate}
        ></Past>
        <Present
          loan={loan}
          remaining={remaining}
          setRemaining={setRemaining}
        ></Present>
        <Future
          newTerm={newTerm}
          setNewTerm={setNewTerm}
          newRate={newRate}
          setNewRate={setNewRate}
        ></Future>
      </section>
      <Results
        purchaseDate={luxonFromPicker(purchaseDate)}
        loan={loan}
        term={term}
        rate={rate}
        remaining={remaining}
        newTerm={newTerm}
        newRate={newRate}
      ></Results>
    </React.Fragment>
  );
};

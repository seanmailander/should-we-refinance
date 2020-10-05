import React, { useState } from "react";
import { Past } from "../control-panels/past";
import { Present } from "../control-panels/present";
import { Future } from "../control-panels/future";
import { Results } from "./results";

export const Main = () => {
  // The past
  const [purchaseDate, setPurchaseDate] = useState(385000);
  const [loan, setLoan] = useState(345000);
  const [term, setTerm] = useState(30);
  const [rate, setRate] = useState(4.6);

  // The present
  const [remaining, setRemaining] = useState(329000);

  // The future
  const [newTerm, setNewTerm] = useState(15);
  const [newRate, setNewRate] = useState(2.7);

  return (
    <React.Fragment>
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
      <Present remaining={remaining} setRemaining={setRemaining}></Present>
      <Future
        newTerm={newTerm}
        setNewTerm={setNewTerm}
        newRate={newRate}
        setNewRate={setNewRate}
      ></Future>
      <Results
        purchaseDate={purchaseDate}
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

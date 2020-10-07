import React from "react";

import { recalculate } from "../logic/calculator";

export const Results = (props) => {
  const results = recalculate(props);
  const {
    effectiveMonthly,
    interestPaid,
    projectedInterest,
    amountPaid,
    usualRemaining,
    timeTakenInMonths,
    scheduledPayment,
    payment,
  } = results;

  return (
    <section className="results">
      {`You've paid ${amountPaid} instead of typical ${usualRemaining} in ${timeTakenInMonths} months`}
      <br />
      {`You typically would have been paying ${scheduledPayment} per month`}
      <br />
      {`But instead have effectively paid ${payment} per month over the last ${timeTakenInMonths} months`}
      <pre>{JSON.stringify(results, null, 2)}</pre>
    </section>
  );
};

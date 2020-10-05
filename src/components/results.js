import React from "react";

import { recalculate } from "../logic/calculator";

export const Results = (props) => {
  const results = recalculate(props);

  return (
    <section className="results">
      Results
        <pre>{ JSON.stringify(results,null, 2) }</pre>
    </section>
  );
};

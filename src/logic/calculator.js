export const recalculate = ({
  purchaseDate,
  loan,
  term,
  rate,
  remaining,
  newTerm,
  newRate,
}) => {
  // Up until now
  const effectiveMonthly = 2000.0;
  const interestPaid = 40000.0;

  // If it continues
  const projectedInterest = 300000.0;

  return {
    effectiveMonthly,
    interestPaid,
    projectedInterest,
  };
};

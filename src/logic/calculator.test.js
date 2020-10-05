const { recalculate } = require("./calculator");

test("Does some math", () => {
  const arrange = {
    purchaseDate: 0,
    loan: 0,
    term: 0,
    rate: 0,
    remaining: 0,
    newTerm: 0,
    newRate: 0,
  };

  // assert
  const assert = {
    effectiveMonthly: 2000.0,
    interestPaid: 40000,
    projectedInterest: 300000,
  };
  expect(recalculate(arrange)).toEqual(assert);
});

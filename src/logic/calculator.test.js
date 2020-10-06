const { recalculate } = require("./calculator");
const { DateTime } = require("luxon");

test("Does some math", () => {
  const arrange = {
    purchaseDate: DateTime.fromISO("2018-01-01"),
    loan: 400000,
    term: 30,
    rate: 4.2,
    remaining: 375000,
    newTerm: 0,
    newRate: 0,
  };

  // assert
  const assert = {
    effectiveMonthly: 2115.45,
    interestPaid: 44828.75,
    projectedInterest: 300000,
  };
  expect(recalculate(arrange)).toEqual(assert);
});

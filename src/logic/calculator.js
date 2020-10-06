import { DateTime } from "luxon";

function pmt(rate, nper, pv) {
  var pvif, pmt;

  pvif = Math.pow(1 + rate, nper);
  pmt = (rate / (pvif - 1)) * -(-pv * pvif);

  return makeCents(pmt);
}
function computeSchedule(
  loan_amount,
  interest_rate,
  payments_per_year,
  years,
  payment
) {
  var schedule = [];
  var remaining = loan_amount;
  var number_of_payments = payments_per_year * years;

  for (var i = 0; i <= number_of_payments; i++) {
    var interest = remaining * (interest_rate / 100 / payments_per_year);
    var principle = payment - interest;
    var row = [
      i,
      principle > 0 ? (principle < payment ? principle : payment) : 0,
      interest > 0 ? interest : 0,
      remaining > 0 ? remaining : 0,
    ];
    schedule.push(row);
    remaining -= principle;
  }

  return schedule;
}

const makeCents = (money) => Number.parseFloat(money.toFixed(2));

const converge = (loan, rate, term, timeTakenInMonths, remaining) => (
  recompute,
  payment,
  remainder = 0
) => {
  // Spread remainder of payments
  const newPayment = makeCents(payment + remainder / timeTakenInMonths);

  // Compute payment schedule
  const paymentSchedule = computeSchedule(loan, rate, 12, term, newPayment);

  const paymentTarget = paymentSchedule.find(
    ([x, p, i, r]) => x === timeTakenInMonths
  );

  // Find remaining
  const newRemainder = makeCents(paymentTarget[3]) - remaining;

  // Run out of remainder to spread?
  if (Math.abs(newRemainder / timeTakenInMonths) < 1) {
    return newPayment;
  }
  // if not, spread it some more
  return recompute(recompute, newPayment, newRemainder);
};

export const recalculate = ({
  purchaseDate,
  loan,
  term,
  rate,
  remaining,
  newTerm,
  newRate,
}) => {
  const scheduledPayment = pmt(rate / 100 / 12, term * 12, loan);
  const scheduledPaymentSchedule = computeSchedule(
    loan,
    rate,
    12,
    term,
    scheduledPayment
  );

  const timeTakenInMonths = Math.floor(
    DateTime.utc().diff(purchaseDate, "months").toObject().months
  );

  const recompute = converge(loan, rate, term, timeTakenInMonths, remaining);
  const payment = recompute(recompute, scheduledPayment);

  // Compute payment schedule
  const paymentSchedule = computeSchedule(loan, rate, 12, term, payment);
  const accumulatedInterest = paymentSchedule.reduce((prev, [x, p, i, r]) => {
    return prev + (x < timeTakenInMonths ? i : 0);
  }, 0);
  const amountPaid = loan - remaining;
  const usualRemaining = makeCents(
    loan -
      scheduledPaymentSchedule.find(
        ([x, p, i, r]) => x === timeTakenInMonths
      )[3]
  );

  // Up until now
  const effectiveMonthly = payment;
  const interestPaid = makeCents(accumulatedInterest);

  // If it continues
  const projectedInterest = 300000.0;

  console.log(
    `You've paid ${amountPaid} instead of typical ${usualRemaining} in ${timeTakenInMonths} months`
  );
  console.log(
    `You typically would have been paying ${scheduledPayment} per month`
  );
  console.log(
    `But instead have effectively paid ${payment} per month over the last ${timeTakenInMonths} months`
  );

  return {
    effectiveMonthly,
    interestPaid,
    projectedInterest,
  };
};

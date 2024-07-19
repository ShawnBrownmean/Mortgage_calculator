import React from 'react';

function Result({ loanAmount, monthlyPayment }) {
  return (
    <div>
      <h2>Loan Details</h2>
      <p>Loan Amount: ${loanAmount.toFixed(2)}</p>
      <p>Monthly Payment: ${monthlyPayment.toFixed(2)}</p>
    </div>
  );
}

export default Result;

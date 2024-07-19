import React, { useState } from 'react';
import { Slider, Typography, Box, Button, Paper, TextField } from '@mui/material';

function Calculator() {
  const [purchasePrice, setPurchasePrice] = useState(450000);
  const [downPayment, setDownPayment] = useState(135000);
  const [repaymentTime, setRepaymentTime] = useState(25);
  const [interestRate, setInterestRate] = useState(3);

  const calculateLoanAmount = () => {
    return purchasePrice - downPayment;
  };

  const calculateMonthlyPayment = () => {
    const loanAmount = calculateLoanAmount();
    const monthlyRate = (interestRate / 100) / 12;
    const numberOfPayments = repaymentTime * 12;
    return (
      loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
    );
  };

  const loanAmount = calculateLoanAmount();
  const monthlyPayment = calculateMonthlyPayment();

  return (
    <Paper elevation={3} sx={{ padding: 4, borderRadius: 2, maxWidth: 600, margin: 'auto' }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
        Mortgage Calculator
      </Typography>
      
      <Box sx={{ marginBottom: 2 }}>
        <Typography>Purchase price:</Typography>
        <TextField
          type="number"
          value={purchasePrice}
          onChange={(e) => setPurchasePrice(Number(e.target.value))}
          variant="outlined"
          fullWidth
          sx={{ marginBottom: 1 }}
        />
        <Slider
          value={purchasePrice}
          onChange={(e, newValue) => setPurchasePrice(newValue)}
          step={1000}
          min={50000}
          max={1000000}
          valueLabelDisplay="auto"
          sx={{ color: '#6200ea' }}
        />
      </Box>
      
      <Box sx={{ marginBottom: 2 }}>
        <Typography>Down payment:</Typography>
        <TextField
          type="number"
          value={downPayment}
          onChange={(e) => setDownPayment(Number(e.target.value))}
          variant="outlined"
          fullWidth
          sx={{ marginBottom: 1 }}
        />
        <Slider
          value={downPayment}
          onChange={(e, newValue) => setDownPayment(newValue)}
          step={1000}
          min={0}
          max={purchasePrice}
          valueLabelDisplay="auto"
          sx={{ color: '#6200ea' }}
        />
      </Box>
      
      <Box sx={{ marginBottom: 2 }}>
        <Typography>Repayment time (years):</Typography>
        <TextField
          type="number"
          value={repaymentTime}
          onChange={(e) => setRepaymentTime(Number(e.target.value))}
          variant="outlined"
          fullWidth
          sx={{ marginBottom: 1 }}
        />
        <Slider
          value={repaymentTime}
          onChange={(e, newValue) => setRepaymentTime(newValue)}
          step={1}
          min={1}
          max={30}
          valueLabelDisplay="auto"
          sx={{ color: '#6200ea' }}
        />
      </Box>
      
      <Box sx={{ marginBottom: 2 }}>
        <Typography>Interest rate (%):</Typography>
        <TextField
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(Number(e.target.value))}
          variant="outlined"
          fullWidth
          sx={{ marginBottom: 1 }}
        />
        <Slider
          value={interestRate}
          onChange={(e, newValue) => setInterestRate(newValue)}
          step={0.1}
          min={0.1}
          max={10}
          valueLabelDisplay="auto"
          sx={{ color: '#6200ea' }}
        />
      </Box>
      
      <Box sx={{ marginBottom: 2, padding: 2, border: '1px solid #ccc', borderRadius: 1 }}>
        <Typography>Loan amount: ${loanAmount.toLocaleString()}</Typography>
        <Typography>Estimated pr. month: ${monthlyPayment.toFixed(2)}</Typography>
      </Box>
      
      <Button variant="contained" color="primary" sx={{ marginTop: 2, backgroundColor: '#6200ea', ':hover': { backgroundColor: '#3700b3' } }}>
        Get a mortgage quote
      </Button>
    </Paper>
  );
}

export default Calculator;

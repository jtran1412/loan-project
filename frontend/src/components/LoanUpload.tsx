import * as React from 'react';
import { Box, Button, FormControl, FormLabel, Input, NumberInput, NumberInputField } from '@chakra-ui/react';

interface LoanUploadProps {
  onLoanAdded: () => void;
}

export const LoanUpload: React.FC<LoanUploadProps> = ({ onLoanAdded }) => {
  const [amount, setAmount] = React.useState('');
  const [term, setTerm] = React.useState('');
  const [rate, setRate] = React.useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('http://localhost:8000/loans/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        amount: parseFloat(amount),
        term: parseInt(term),
        rate: parseFloat(rate),
      }),
    });
    setAmount('');
    setTerm('');
    setRate('');
    onLoanAdded();
  };

  return (
    <Box as="form" onSubmit={handleSubmit} mb={4}>
      <FormControl isRequired mb={2}>
        <FormLabel>Amount</FormLabel>
        <NumberInput value={amount} onChange={setAmount} min={0}>
          <NumberInputField />
        </NumberInput>
      </FormControl>
      <FormControl isRequired mb={2}>
        <FormLabel>Term (months)</FormLabel>
        <NumberInput value={term} onChange={setTerm} min={1}>
          <NumberInputField />
        </NumberInput>
      </FormControl>
      <FormControl isRequired mb={2}>
        <FormLabel>Rate</FormLabel>
        <NumberInput value={rate} onChange={setRate} min={0} max={1} step={0.01}>
          <NumberInputField />
        </NumberInput>
      </FormControl>
      <Button type="submit" colorScheme="blue">Add Loan</Button>
    </Box>
  );
}; 
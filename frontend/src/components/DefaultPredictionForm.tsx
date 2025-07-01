import * as React from 'react';
import { Box, Button, FormControl, FormLabel, NumberInput, NumberInputField, Text } from '@chakra-ui/react';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8000';

export const DefaultPredictionForm: React.FC = () => {
  const [amount, setAmount] = React.useState('');
  const [term, setTerm] = React.useState('');
  const [rate, setRate] = React.useState('');
  const [prob, setProb] = React.useState<number | null>(null);
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setProb(null);
    const res = await fetch(`${BACKEND_URL}/predict_default/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        amount: parseFloat(amount),
        term: parseInt(term),
        rate: parseFloat(rate),
      }),
    });
    const data = await res.json();
    setProb(data.default_probability);
    setLoading(false);
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
      <Button type="submit" colorScheme="purple" isLoading={loading}>Predict Default Probability</Button>
      {prob !== null && (
        <Text mt={3} fontWeight="bold">Default Probability: {(prob * 100).toFixed(2)}%</Text>
      )}
    </Box>
  );
}; 
import * as React from 'react';
import { Box, Button, FormControl, FormLabel, Input, NumberInput, NumberInputField } from '@chakra-ui/react';

interface DealCreateFormProps {
  onDealAdded: () => void;
}

export const DealCreateForm: React.FC<DealCreateFormProps> = ({ onDealAdded }) => {
  const [name, setName] = React.useState('');
  const [tranche, setTranche] = React.useState('');
  const [rate, setRate] = React.useState('');
  const [amount, setAmount] = React.useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('http://localhost:8000/deals/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        tranche,
        rate: parseFloat(rate),
        amount: parseFloat(amount),
      }),
    });
    setName('');
    setTranche('');
    setRate('');
    setAmount('');
    onDealAdded();
  };

  return (
    <Box as="form" onSubmit={handleSubmit} mb={4}>
      <FormControl isRequired mb={2}>
        <FormLabel>Name</FormLabel>
        <Input value={name} onChange={e => setName(e.target.value)} />
      </FormControl>
      <FormControl isRequired mb={2}>
        <FormLabel>Tranche</FormLabel>
        <Input value={tranche} onChange={e => setTranche(e.target.value)} />
      </FormControl>
      <FormControl isRequired mb={2}>
        <FormLabel>Rate</FormLabel>
        <NumberInput value={rate} onChange={setRate} min={0} max={1} step={0.01}>
          <NumberInputField />
        </NumberInput>
      </FormControl>
      <FormControl isRequired mb={2}>
        <FormLabel>Amount</FormLabel>
        <NumberInput value={amount} onChange={setAmount} min={0}>
          <NumberInputField />
        </NumberInput>
      </FormControl>
      <Button type="submit" colorScheme="green">Add Deal</Button>
    </Box>
  );
}; 
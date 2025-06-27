import * as React from 'react';
import { ChakraProvider, Box, Heading, Text } from '@chakra-ui/react';
import { LoanTable } from './components/LoanTable';
import { DealTable } from './components/DealTable';
import { LoanUpload } from './components/LoanUpload';
import { DealCreateForm } from './components/DealCreateForm';
import { DefaultPredictionForm } from './components/DefaultPredictionForm';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8000';

type Loan = {
  id: number;
  amount: number;
  term: number;
  rate: number;
  status: string;
  defaulted: boolean;
  created_at: string;
};

type Deal = {
  id: number;
  name: string;
  tranche: string;
  rate: number;
  amount: number;
  created_at: string;
};

function App() {
  const [loans, setLoans] = React.useState<Loan[]>([]);
  const [deals, setDeals] = React.useState<Deal[]>([]);

  const fetchLoans = React.useCallback(() => {
    fetch(`${BACKEND_URL}/loans/`)
      .then(res => res.json())
      .then(data => setLoans(data));
  }, []);

  const fetchDeals = React.useCallback(() => {
    fetch(`${BACKEND_URL}/deals/`)
      .then(res => res.json())
      .then(data => setDeals(data));
  }, []);

  React.useEffect(() => {
    fetchLoans();
    fetchDeals();
  }, [fetchLoans, fetchDeals]);

  return (
    <ChakraProvider>
      <Box p={8}>
        <Heading mb={4}>Affirm Loan Performance Analyzer</Heading>
        <Text mb={4}>Upload loan data, view analytics, structure deals, and optimize funding strategies.</Text>
        <Box borderWidth={1} borderRadius="lg" p={4} mb={4}>
          <Heading size="md" mb={2}>Loan Data</Heading>
          <LoanUpload onLoanAdded={fetchLoans} />
          <LoanTable loans={loans} />
        </Box>
        <Box borderWidth={1} borderRadius="lg" p={4} mb={4}>
          <Heading size="md" mb={2}>Deal Structuring</Heading>
          <DealCreateForm onDealAdded={fetchDeals} />
          <DealTable deals={deals} />
        </Box>
        <Box borderWidth={1} borderRadius="lg" p={4}>
          <Heading size="md" mb={2}>ML Default Prediction</Heading>
          <DefaultPredictionForm />
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App; 
import * as React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

type Loan = {
  id: number;
  amount: number;
  term: number;
  rate: number;
  status: string;
  defaulted: boolean;
  created_at: string;
};

type LoanTableProps = {
  loans: Loan[];
};

export const LoanTable: React.FC<LoanTableProps> = ({ loans }) => (
  <Table variant="simple">
    <Thead>
      <Tr>
        <Th>ID</Th>
        <Th>Amount</Th>
        <Th>Term</Th>
        <Th>Rate</Th>
        <Th>Status</Th>
        <Th>Defaulted</Th>
        <Th>Created At</Th>
      </Tr>
    </Thead>
    <Tbody>
      {loans.map((loan: Loan) => (
        <Tr key={loan.id}>
          <Td>{loan.id}</Td>
          <Td>{loan.amount}</Td>
          <Td>{loan.term}</Td>
          <Td>{loan.rate}</Td>
          <Td>{loan.status}</Td>
          <Td>{loan.defaulted ? 'Yes' : 'No'}</Td>
          <Td>{loan.created_at}</Td>
        </Tr>
      ))}
    </Tbody>
  </Table>
); 
import * as React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

type Deal = {
  id: number;
  name: string;
  tranche: string;
  rate: number;
  amount: number;
  created_at: string;
};

type DealTableProps = {
  deals: Deal[];
};

export const DealTable: React.FC<DealTableProps> = ({ deals }) => (
  <Table variant="simple">
    <Thead>
      <Tr>
        <Th>ID</Th>
        <Th>Name</Th>
        <Th>Tranche</Th>
        <Th>Rate</Th>
        <Th>Amount</Th>
        <Th>Created At</Th>
      </Tr>
    </Thead>
    <Tbody>
      {deals.map((deal: Deal) => (
        <Tr key={deal.id}>
          <Td>{deal.id}</Td>
          <Td>{deal.name}</Td>
          <Td>{deal.tranche}</Td>
          <Td>{deal.rate}</Td>
          <Td>{deal.amount}</Td>
          <Td>{deal.created_at}</Td>
        </Tr>
      ))}
    </Tbody>
  </Table>
); 
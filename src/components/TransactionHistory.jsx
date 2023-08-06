import { TransactionItem } from './TransactionItem';
import { Wrapper, Table, TableTh } from './styles/TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Wrapper>
      <Table>
        <thead>
          <tr>
            <TableTh>Type</TableTh>
            <TableTh>Amount</TableTh>
            <TableTh>Currency</TableTh>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <TransactionItem item={item} />
            </tr>
          ))}
        </tbody>
      </Table>
    </Wrapper>
  );
};

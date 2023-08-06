import { TableTd } from './styles/TransactionItem.styled';

export const TransactionItem = ({ item: { type, amount, currency } }) => {
  return (
    <>
      <TableTd>{type}</TableTd>
      <TableTd>{amount}</TableTd>
      <TableTd>{currency}</TableTd>
    </>
  );
};

import { Items } from "./styles/StatisticsList.styled";
import { Item } from "./styles/StatisticsList.styled";

export const StatisticsList = ({ statsItems: { label, percentage } }) => {
  return (
    <Items>
      <Item> {label}</Item>
      <Item> {percentage}%</Item>
    </Items>
  );
};
import { Item } from "./styles/StatisticsList.styled";
import { Items } from "./styles/StatisticsList.styled";

export const StatisticsList = ({ statsItems: { label, percentage } }) => {
  return (
    <Items>
      <span> {label}</span>
      <Item> {percentage}%</Item>
    </Items>
  );
};
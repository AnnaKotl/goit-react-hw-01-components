import { StatisticsList } from "./StatisticsList";
import { WrapperCard } from "./styles/Statistics.styled";
import { List } from "./styles/Statistics.styled";
import { Item } from "./styles/Statistics.styled";

export const Statistics = ({ title, stats }) => {
  return (
    <WrapperCard>
      {title && <h2>{title}</h2>}
      <List>
        {stats.map(statsItems => (
          <Item key={statsItems.id}>
            <StatisticsList statsItems={statsItems} />
          </Item>
        ))}
      </List>
    </WrapperCard>
  );
};
import { StatisticsList } from "./StatisticsList";
import { WrapperCard, List, Item, Title } from "./styles/Statistics.styled";
import { getRandomHexColor } from './randomColor';

export const Statistics = ({ title, stats }) => {
  return (
    <WrapperCard>
      {title && <Title>{title}</Title>}
      <List>
        {stats.map(statsItems => (
          <Item key={statsItems.id}
            style={{ backgroundColor: getRandomHexColor() }} >
            <StatisticsList statsItems={statsItems} />
          </Item>
        ))}
      </List>
    </WrapperCard>
  );
};
import { StatisticsList } from "./StatisticsList";

export const Statistics = ({ title, stats }) => {
  return (
    <section>
      {title && <h2>{title}</h2>}
      <ul>
        {stats.map(statsItems => (
          <li key={statsItems.id}>
            <StatisticsList statsItems={statsItems} />
          </li>
        ))}
      </ul>
    </section>
  );
};
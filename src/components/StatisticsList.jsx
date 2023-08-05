export const StatisticsList = ({ statsItems: { label, percentage } }) => {
  return (
    <>
      <span> {label}</span>
      <span> {percentage}%</span>
    </>
  );
};
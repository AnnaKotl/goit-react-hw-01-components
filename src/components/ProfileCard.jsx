import { StatsWrapper } from './styles/ProfileCard.styled.js';
import { Numb } from './styles/ProfileCard.styled.js';

export const ProfileCard = ({ userStats: { followers, views, likes } }) => {
  return (
    <StatsWrapper>
      <li>
        <span>Followers: </span>
        <Numb>{followers}</Numb>
      </li>
      <li>
        <span>Views: </span>
        <Numb>{views}</Numb>
      </li>
      <li>
        <span>Likes: </span>
        <Numb>{likes}</Numb>
      </li>
    </StatsWrapper>
  );
};
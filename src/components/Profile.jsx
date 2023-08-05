import { ProfileCard } from "./ProfileCard.jsx";
import { Card } from './styles/Profile.styled.js';
import { Wrapper } from './styles/Profile.styled.js';
import { WrapperCard } from './styles/Profile.styled.js';
import { Name } from './styles/Profile.styled.js';
import { Tag } from './styles/Profile.styled.js';
import { Avatar } from './styles/Profile.styled.js';


export const Profile = ({ userCard: {avatar, username, tag, location, stats} }) => {
  return (
    <WrapperCard>
      <Wrapper>
        <Card>
          <Avatar src={avatar} alt="user avatar" width="160" />
          <Name>{username}</Name>
          <Tag>@{tag}</Tag>
          <p>{location}</p>
        </Card>
          <ProfileCard userStats={stats} />
      </Wrapper>
    </WrapperCard>
  );
};
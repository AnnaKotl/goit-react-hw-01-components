import { ProfileCard } from "./ProfileCard.jsx";

export const Profile = ({ userCard: {avatar, username, tag, location, stats} }) => {
  return (
    <div>
      <div>
        <img src={avatar} alt="user avatar" width="160" />
        <p>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>
      <ProfileCard userStats={stats} />
    </div>
  );
};
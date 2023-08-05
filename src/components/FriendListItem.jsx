export const FriendListItem = ({friend: {isOnline, avatar, name}}) => {
    return (
        <div>
            <span>{isOnline}</span>
            <img src={avatar} alt="User avatar" width="48" />
            <p>{name}</p>
        </div>
    );
};
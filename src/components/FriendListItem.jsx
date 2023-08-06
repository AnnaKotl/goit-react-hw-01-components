import { Wrapper, Avatar, IsOnline, Card } from './styles/FriendListItem.styled';

export const FriendListItem = ({ friend: { isOnline, avatar, name } }) => {
    return (
        <Wrapper>
            <Card>
                <Avatar src={avatar} alt="User avatar" width="100" />
                <p>{name}</p>
                <IsOnline $online={isOnline}>
                </IsOnline>
            </Card>
        </Wrapper>
    );
};

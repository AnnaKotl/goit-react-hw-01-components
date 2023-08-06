import { Wrapper } from './styles/FriendListItem.styled';
import { Avatar } from './styles/FriendListItem.styled';
import { IsOnline } from './styles/FriendListItem.styled';
import { Card } from './styles/FriendListItem.styled';

export const FriendListItem = ({ friend: { isOnline, avatar, name } }) => {
    return (
        <Wrapper>
            <Card>
                <Avatar src={avatar} alt="User avatar" width="100" />
                <p>{name}</p>
                <IsOnline isOnline={isOnline}>
                </IsOnline>
            </Card>
        </Wrapper>
    );
};
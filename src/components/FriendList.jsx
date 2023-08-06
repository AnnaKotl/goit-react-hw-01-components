import { FriendListItem } from "./FriendListItem";
import { WrapperCard } from './styles/FriendList.styled';
import { List } from './styles/FriendList.styled';

export const FriendList = ({friends}) => {
    return (
        <WrapperCard>
            <List>
                {friends.map(friend => (
                    <li key={friend.id}>
                        <FriendListItem friend={friend}/>
                    </li>
                ))}
            </List>
        </WrapperCard>
    );
};
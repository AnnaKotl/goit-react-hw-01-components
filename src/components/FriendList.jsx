import { FriendListItem } from "./FriendListItem";
import { WrapperCard, List } from './styles/FriendList.styled.js';

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
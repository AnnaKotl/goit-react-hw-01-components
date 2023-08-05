import { Profile } from "./Profile.jsx";
import user from '../data/user.json'
import { Statistics } from "./Statistics.jsx";
import data from '../data/data.json';
import { FriendList } from "./FriendList.jsx";
import friends from '../data/friends.json';
import { TransactionHistory } from "./TransactionHistory.jsx";
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile userCard={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions}/>
    </div>
  );
};
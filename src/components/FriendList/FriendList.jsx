import PropTypes from 'prop-types';
import { FrienList } from './FriendList.styled';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export function FriendList({ friends }) {
  return (
    <FrienList>
      {friends.map(friend => {
        return <FriendListItem friend={friend} key={friend.id} />;
      })}
    </FrienList>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

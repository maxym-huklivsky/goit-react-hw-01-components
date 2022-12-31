import PropTypes from 'prop-types';
import { FrienList, Item, Name, Status } from './FriendList.styled';

export function FriendList({ friends }) {
  return (
    <FrienList>
      {friends.map(({ id, isOnline, avatar, name }) => {
        return (
          <Item key={id}>
            <Status isOnline={isOnline}></Status>
            <img src={avatar} alt={name} width="48" />
            <Name>{name}</Name>
          </Item>
        );
      })}
    </FrienList>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

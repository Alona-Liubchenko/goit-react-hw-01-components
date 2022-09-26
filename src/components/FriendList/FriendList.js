import PropTypes from 'prop-types';
import {
  ListFriend,
  FriendItem,
  FriendStatus,
  FriendAvatar,
  FriendName,
} from './FriendList.styled';
export const FriendList = ({ friends }) => {
  return (
    <ListFriend>
      {friends.map(({ id, name, avatar, isOnline }) => (
        <FriendItem key={id}>
          <FriendStatus>{isOnline}</FriendStatus>
          <FriendAvatar src={avatar} alt={name} width="48" />
          <FriendName>{name}</FriendName>
        </FriendItem>
      ))}
    </ListFriend>
  );
};
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};

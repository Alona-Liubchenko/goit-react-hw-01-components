import PropTypes from 'prop-types';
import {
  Card,
  UserInfo,
  Img,
  UserName,
  UserTag,
  UserLocation,
  Stats,
  Li,
  Label,
  Quantity,
} from './Profile.styled';
export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Card>
      <UserInfo>
        <Img src={avatar} alt={username} />
        <UserName>{username}</UserName>
        <UserTag>@{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </UserInfo>

      <Stats>
        <Li>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </Li>
        <Li>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </Li>
        <Li>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </Li>
      </Stats>
    </Card>
  );
};
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

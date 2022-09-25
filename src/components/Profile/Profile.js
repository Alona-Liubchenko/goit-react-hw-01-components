import PropTypes from 'prop-types';
import { Card, UserInfo } from './Profile.styled';
export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Card>
      <UserInfo>
        <img src={avatar} alt={username} />
        <p class="name">{username}</p>
        <p class="tag">@{tag}</p>
        <p class="location">{location}</p>
      </UserInfo>

      <ul class="stats">
        <li>
          <span class="label">Followers</span>
          <span class="quantity">{stats.followers}</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">{stats.views}</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">{stats.likes}</span>
        </li>
      </ul>
    </Card>
  );
};
Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    
  }),
};

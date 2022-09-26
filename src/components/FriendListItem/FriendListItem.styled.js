import styled from 'styled-components';

export const FriendItem = styled.li`
  height: 80px;
  display: flex;
  align-items: center;
  gap: 20px;
  border: 1px solid;
  margin-top: 10px;
`;
export const FriendStatus = styled.span`
  margin-left: 20px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${p => (p.isOnline ? 'green' : 'red')};
`;
export const FriendAvatar = styled.img`
  width: 60px;
`;
export const FriendName = styled.p`
  font-size: 24px;
  font-weight: 600;
`;

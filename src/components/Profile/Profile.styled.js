import styled from 'styled-components';

export const Card = styled.div`
  width: 350px;
  margin: 20px auto;
  padding: 20px;
  background: white;
  box-shadow: rgb(0 0 0 / 55%) 10px 10px 5px 0px;
`;
export const UserInfo = styled.div`
  padding: 10px;
  text-align: center;
  width: auto;
`;
export const UserAvatar = styled.img`
  width: 200px;
  height: auto;
  margin: 0 auto;
  border-radius: 180px;
  background: #ddd7d7;
`;
export const UserName = styled.p`
  font-size: 28px;
  font-weight: 700;
  margin-top: 8px;
`;
export const UserTag = styled.p`
  font-size: 20px;
  font-weight: 400;
  margin-top: 8px;
`;
export const UserLocation = styled.p`
  font-size: 20px;
  font-weight: 400;
  margin-top: 8px;
`;
export const Stats = styled.ul`
  display: flex;

  justify-content: center;
`;
export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid gray;
  &:not(:last-child) {
    border-right: none;
  }
  align-items: center;
  padding: 5px;
`;
export const Label = styled.span`
  font-size: 18px;
  font-weight: 400;
`;
export const Quantity = styled.span`
  font-size: 16px;
  font-weight: 400;
  margin-top: 8px;
`;

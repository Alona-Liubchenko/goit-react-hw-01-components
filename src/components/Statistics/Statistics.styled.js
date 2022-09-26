import styled from 'styled-components';
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
export const StatBox = styled.section`
  width: 350px;
  margin: 20px auto;
  padding: 20px;
  background: white;
  box-shadow: rgb(0 0 0 / 55%) 10px 10px 5px 0px;
`;
export const Title = styled.h2`
  text-transform: uppercase;
  text-align: center;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 20px;
`;
export const StatList = styled.ul`
  display: flex;
`;
export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${getRandomHexColor};
  text-align: center;
  border: 1px;
  padding: 5px;
`;
export const Label = styled.span`
  font-size: 20px;
  font-weight: 400;
`;
export const Percentage = styled.span`
  font-size: 20px;
  font-weight: 400;
  margin-top: 8px;
`;

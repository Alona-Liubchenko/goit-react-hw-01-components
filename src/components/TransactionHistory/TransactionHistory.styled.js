import styled from 'styled-components';
export const TableContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
`;

export const Table = styled.table`
  width: 600px;
  height: 1120px;
  overflow: hidden;
  box-shadow: rgb(0 0 0 / 55%) 10px 10px 5px 0px;
`;
export const Thead = styled.thead`
  font-size: 20px;
  font-weight: 700;
  background-color: rgb(171 179 187);
`;
export const Th = styled.th`
  padding: 20px 0px;
  border: 1px solid rgb(171 179 187);
  border-bottom: none;
  border-right: 1px solid rgb(106 109 112);
  &:last-child {
    border-right-color: rgb(106 109 112);
  }
`;
export const Tbody = styled.tbody`
  font-size: 14px;
  & tr:nth-of-type(odd) {
    background-color: rgb(221 226 231);
  }
`;
export const Td = styled.td`
  font-size: 17px;
  padding: 16px 0px;
  text-align: center;
  border: 1px solid rgb(106 109 112);
`;

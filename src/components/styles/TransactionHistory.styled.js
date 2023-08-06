import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px auto 0;
  padding: 20px;
  width: 880px;
  background: #f5d7f0;
  border: 1px solid transparent;
  border-radius: 8px;
  transition: border-color 0.3s, box-shadow 0.3s;
  margin-bottom: 100px;

  &:hover {
    border-color: #ebc5e4;
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableTh = styled.th`
  padding: 10px 20px;
  font-size: 20px;
  text-align: center;
`;

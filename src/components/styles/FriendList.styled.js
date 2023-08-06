import styled from 'styled-components';

export const WrapperCard = styled.div`
  margin: 20px auto 0;
  width: 880px;
  height: 200px;
  background: #f5d7f0;
  border: 1px solid transparent;
  border-radius: 8px;
  transition: border-color 0.3s;

  &:hover {
    border-color: #ebc5e4;
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);;
  }
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;
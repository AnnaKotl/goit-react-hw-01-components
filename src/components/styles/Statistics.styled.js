import styled from 'styled-components';
import { getRandomHexColor } from '../randomColor';

export const WrapperCard = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px auto 0;
  padding: 20px;
  width: 380px;
  height: 200px;
  gap: 10px;

  background: #f5d7f0;
  border: 1px solid transparent;
  border-radius: 8px;
  transition: border-color 0.3s, transform 0.2s;

  &:hover {
    border-color: #ebc5e4;
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
    transform: scale(1.02);
  }
`;

export const List = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 6px;
`;

export const Item = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 6px;
    background: ${getRandomHexColor()};
    padding: 4px;
    border-radius: 8px;
    width: 60px;
    height: 60px;
    cursor: pointer;
    border: 2px solid transparent;
    transition: box-shadow 0.3s;
      &:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  }
`;
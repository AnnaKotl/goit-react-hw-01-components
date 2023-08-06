import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
    width: 140px;
`;

export const Avatar = styled.img`
    cursor: pointer;
    transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
  }
`;

export const IsOnline = styled.div`
  position: relative;
  width: 26px;
  height: 26px;
  background-color: ${({ $online, theme }) =>
    $online ? theme.colors.online : theme.colors.offline};
  border-radius: 100%;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    transform: scale(1.2);
    width: 100px;
    height: 26px;
    border-radius: 8px;
  }

  &:hover::before {
    content: '${props => (props.$online ? 'Online' : 'Offline')}';
    align-items: center;
    text-align: center;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 12px;
    color: white;
    opacity: 0;
    transition: 0.2s;
  }

  &:hover::before {
    position: absolute;
    opacity: 1;
    top: 25%;
    left: 20%;
  }
`;


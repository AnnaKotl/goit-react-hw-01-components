import styled from 'styled-components';

const isOnlineColor = ({ theme, isOnline }) => {
    if (isOnline) {
        return theme.colors.online;
    } else {
        return theme.colors.offline;
    }
}

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
    width: 16px;
    height: 16px;
    background-color: ${isOnlineColor};
    border-radius: 100%;
    cursor: pointer;
    transition: 0.2s;
  &:hover {
    transform: scale(1.2);
    width: 100px;
    height: 16px;
    border-radius: 8px;
  }
`;

    

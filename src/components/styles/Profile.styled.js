import styled from 'styled-components';

export const WrapperCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto 0;
  width: 380px;
  height: 100%;
  cursor: pointer;
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

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const Name = styled.p`
  padding-top: 20px;
  font-size: 30px;
`;

export const Tag = styled.p`
  font-weight: bold;
  color: #992248;
  transition: transform 0.2s;
  &:hover {
    color: #8f1a3f;
    transform: scale(1.1);
  }
`;

export const Avatar = styled.img`
  transition: transform 0.4s;
  &:hover {
    transform: scale(1.2);
  }
`;
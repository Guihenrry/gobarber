import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const Container = styled.button`
  width: 100%;
  height: 56px;
  background: #ff9000;
  color: #312e38;
  border-radius: 10px;
  padding: 0 16px;
  border: 0;
  font-weight: 500;
  transition: background-color 0.2s;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }

  svg {
    animation: ${rotate} 2s linear infinite;
  }
`;

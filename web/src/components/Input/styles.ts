import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  position: relative;
  color: #666360;

  & + div {
    margin-top: 8px;
  }

  svg {
    position: absolute;
    left: 16px;
    top: 16px;
    pointer-events: none;
  }

  input {
    width: 100%;
    padding: 16px;
    background: #232129;
    border-radius: 10px;
    border: 2px solid #232129;

    color: #f4ede8;

    &::placeholder {
      color: #666360;
    }
  }

  svg ~ input {
    padding-left: 52px;
  }
`;

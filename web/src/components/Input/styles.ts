import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  position: relative;

  & + div {
    margin-top: 8px;
  }

  > svg {
    position: absolute;
    left: 16px;
    top: 16px;
    pointer-events: none;
    color: ${(props) =>
      props.isFocused || props.isFilled ? '#ff9000' : '#666360'};
  }

  input {
    width: 100%;
    padding: 16px 40px 16px 16px;
    background: #232129;
    border-radius: 10px;
    color: #f4ede8;
    border: 2px solid;
    border-color: ${(props) => (props.isFocused ? '#ff9000' : '#232129')};

    &::placeholder {
      color: #666360;
    }

    ${(props) =>
      props.isErrored &&
      css`
        border-color: #c53030;
      `}
  }

  svg ~ input {
    padding-left: 52px;
  }
`;

export const Error = styled(Tooltip)`
  position: absolute;
  right: 16px;
  top: 20px;

  span {
    background: #c53030;
    color: #ffffff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;

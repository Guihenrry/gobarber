import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

interface ContainerProps {
  type?: 'info' | 'success' | 'error';
  hasdescription: string | undefined;
}

const toastTypeVariations = {
  info: css`
    background: #ebf8ff;
    color: #7172b7;
  `,
  success: css`
    background: #e6fffa;
    color: #2e656a;
  `,
  error: css`
    background: #fddede;
    color: #c53030;
  `,
};

export const Container = styled(animated.div)<ContainerProps>`
  width: 370px;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 430px) {
    width: 290px;
  }

  & + div {
    margin-top: 8px;
  }

  ${(props) => toastTypeVariations[props.type || 'info']}

  display: flex;
  position: relative;

  > svg {
    margin: 4px 12px 0 0;
  }

  > div {
    flex: 1;

    p {
      margin-top: 4px;
      font-size: 0.875rem;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  > button {
    position: absolute;
    right: 16px;
    top: 19px;
    border: 0;
    background: transparent;
    opacity: 0.6;
    color: inherit;
  }

  ${(props) =>
    !props.hasdescription &&
    css`
      align-items: center;

      svg {
        margin-top: 0;
      }
    `}
`;

import styled, { keyframes } from 'styled-components';
import { Form as unformForm } from '@unform/web';
import { shade } from 'polished';

const appearFromBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Header = styled.header`
  padding: 0 32px;
  height: 144px;
  background: #28262e;
  margin-bottom: -93px;

  > div {
    max-width: 1120px;
    margin: 0 auto;
    height: 100%;

    display: flex;
    align-items: center;

    a {
      color: #999591;
      width: 50px;
      height: 50px;

      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        width: 24px;
        height: 24px;
      }
    }
  }
`;

export const Form = styled(unformForm)`
  max-width: 404px;
  padding: 0 32px 64px 32px;
  margin: 0 auto;
  animation: ${appearFromBottom} 1s;

  h1 {
    color: #f4ede8;
    font-size: 20px;
    line-height: 26px;
    margin-bottom: 24px;
  }

  > button {
    margin-top: 24px;
  }
`;

export const PasswordWrraper = styled.section`
  margin-top: 24px;
`;

export const AvatarInput = styled.div`
  margin-bottom: 32px;
  position: relative;
  width: 186px;
  margin: 0 auto;

  img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  label {
    width: 48px;
    height: 48px;
    border: 0;
    background: #ff9000;
    border-radius: 50%;
    transition: background-color 0.2s;
    cursor: pointer;

    position: absolute;
    bottom: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: #312e38;
    }

    &:hover {
      background: ${shade(0.2, '#FF9000')};
    }
  }
`;

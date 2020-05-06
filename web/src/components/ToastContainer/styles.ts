import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px;
  overflow: hidden;

  position: absolute;
  right: 0;
  top: 0;

  @media screen and (max-width: 430px) {
    padding: 15px;
  }
`;

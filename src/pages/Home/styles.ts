import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  top: 0;
  right: 0;
  left: 0;
  bottom: 0;

  background: #f0f0f7;
`;

export const Content = styled.div`
  flex-grow: 1;

  margin-top: 64px;
  margin-bottom: 64px;

  align-self: center;
  border: 1px solid rgba(202, 83, 215, 0.5);
  border-radius: 8px;
  background: #e5e5e7;
  width: 80%;
  max-width: 800px;
  padding: 66px;

  /* section {
    text-align: justify;
    font-size: 16px;
    font-weight: 500;

    color: #333333;

    p {
      max-width: 608px;
      margin-bottom: 28px;
      span {
        color: #ca53d7;
      }

      a {
        color: #ca53d7;
      }
    }
  } */

  @media (max-width: 800px) {
    max-width: 90vw;

    section {
      padding: 33px;
    }
  }
`;

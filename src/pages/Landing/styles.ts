import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;

  @media (max-width: 800px) {
    height: 90vh;
  }
`;

export const Content = styled.div`
  min-height: 65%;
  width: 100%;
  background: rgba(202, 83, 215, 0.5);

  display: flex;

  justify-content: space-evenly;
  align-items: center;

  div {
    max-width: 450px;
    color: #fff;
    text-align: center;

    h1 {
      font-weight: 900;
      font-size: 48px;
    }

    p {
      font-weight: 500;
      font-size: 24px;
    }
  }

  @media (max-width: 800px) {
    min-height: 0;
    margin: 0;
    > div {
      margin: 0;
      h1 {
        font-size: 36px;
        margin: 32px 16px 4px;
      }

      p {
        margin-bottom: 16px;
        font-size: 20px;
      }
    }
    flex-direction: column;
    img {
      display: none;
      margin: 0;
    }
  }
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  flex: 1;

  align-items: center;

  h2 {
    font-weight: bold;
    font-size: 24px;
    color: #333333;

    /* max-width: 237px; */
    text-align: left;
    margin-left: 200px;
  }

  p {
    color: #9c98a6;
    font-size: 16px;
    max-width: 230px;

    text-align: right;

    margin-left: 32px;
    margin-top: 16px;
  }

  img {
    margin-left: 16px;
    margin-top: 16px;
  }

  a {
    padding: 39px 91px;
    background: #4a2787;
    border-radius: 8px;

    color: #fffcfe;
    font-weight: bold;
    font-size: 24px;
    font-family: 'Archivo', sans-serif;
    border: none;
    margin-left: 32px;
    text-decoration: none;
  }

  a + a {
    background: #ca53d7;
  }

  @media (max-width: 800px) {
    height: 100%;
    flex-direction: column;
    justify-content: center;

    h2 {
      max-width: 80vw;
      margin: 32px auto 16px 32px;
    }

    p {
      max-width: 80vw;
      margin: 0 auto auto 32px;
      text-align: left;
    }

    img {
      display: none;
    }

    a {
      width: 90vw;

      text-align: center;
      margin: 0;
      padding: 24px;
      font-size: 16px;
      margin-bottom: 16px;
    }
  }
`;

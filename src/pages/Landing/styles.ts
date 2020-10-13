import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
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

  @media(max-width: 800px) {
    flex-direction: column;
    min-height: 50vh;
    img {
      display: none;
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

    max-width: 237px;

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
    font-family: "Archivo", sans-serif;
    border: none;
    margin-left: 32px;
    text-decoration:none;
  }

  a + a {
    background: #ca53d7;
  }

  @media(max-width: 800px) {
    flex-direction: column;
    justify-content: center;

    h2 {
      max-width: 80vw;
      margin: 0;
      margin-bottom: 16px;

    }

    p {
      max-width: 80vw;
      margin: 0;
      text-align: left;
      margin-bottom: 16px;
    }

    img {
      display:none;
    }

    a {
      width: 90vw;

      text-align: center;
      margin: 0;
      padding: 24px;
      margin-bottom: 16px;
    }
  }
`;

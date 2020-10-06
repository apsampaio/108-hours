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
    padding: 39px 91px;
    background: #ca53d7;
  }
`;

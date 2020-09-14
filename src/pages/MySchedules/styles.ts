import styled from "styled-components";

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

  border-radius: 8px;
  border: 1px solid rgba(202, 83, 215, 0.5);

  min-width: 736px;
  min-height: 550px;

  background: #fff;
  align-self: center;

  display: flex;
  flex-direction: column;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    max-height: 90px;

    border-bottom: 1px solid rgba(202, 83, 215, 0.5);
    padding-bottom: 20px;

    strong {
      color: #32264d;
      font-weight: bold;
      font-size: 24px;
      margin-left: 64px;
      margin-top: 33px;
    }

    a {
      margin-right: 64px;
      margin-top: 33px;
      font-size: 16px;

      font-weight: bold;
      color: #8257e5;
    }
  }

  img {
    padding-top: 70px;
  }

  h3 {
    align-self: center;
    text-align: center;

    max-width: 251px;
    padding-top: 40px;
    font-size: 24px;

    color: #333333;
  }

  p {
    text-align: center;
    font-weight: normal;

    font-size: 14px;
    padding-top: 17px;

    color: #333333;
  }
`;

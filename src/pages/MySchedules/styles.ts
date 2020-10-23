import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  /* top: 0;
  right: 0;
  left: 0;
  bottom: 0; */

  background-color: #f0f0f7;
`;

export const Content = styled.div`
  flex-grow: 1;

  margin-top: 64px;
  margin-bottom: 32px;

  border-radius: 8px;
  border: 1px solid rgba(202, 83, 215, 0.5);

  min-width: 736px;
  min-height: 550px;

  background-color: #fff;
  align-self: center;

  display: flex;
  flex-direction: column;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    /* max-height: 90px; */

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
      text-decoration: none;
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

  @media(max-width: 800px) {
    min-width: 90vw;
  }

`;

export const DayList = styled.ul`
  display: flex;
  flex-direction: column;

  button {
    padding: 10px 35px;

    border: 0;
    border-radius: 4px;
    background: transparent;
    color: #ca53d7;
    font-size: 16px;
    font-weight: 700;
  }

  button:hover {
    cursor: pointer;
  }

`;

export const DayItem = styled.main`
  width: 100%;
  max-width: 736px;

  position: relative;

  flex-direction: column;

  align-items: flex-start;
  justify-content: flex-start;

  padding-left: 64px;
  padding-right: 64px;
  padding-top: 16px;

  padding-bottom: 28px;
  border-bottom: 1px solid rgba(202, 83, 215, 0.5);

  &:last-of-type {
    border-bottom: 0;
  }

  label {
    color: #32264d;
    font-weight: 500;
  }

  span {
    flex-direction: row;
    display: flex;

    justify-content: flex-start;
    flex-wrap: wrap;

    padding-top: 12px;
    padding-left: 15px;

    span {
      font-size: 16px;
      color: #fffcfe;
      background: #4a2787;

      padding: 15px 20px;
      border: 1px solid #4a2787;
      border-radius: 8px;

      margin-right: 24px;
      margin-top: 12px;
      cursor: pointer;
    }
  }


`;

export const Modal = styled.div`
  position: absolute;
  display: flex;

  width: 100%;
  height: 100%;

  left: 0;
  top: 0;

  background-color: rgba(0, 0, 0, 0.4);

  align-items: center;
  justify-content: center !important;

  span {
    background-color: #fff;
    padding: 24px;
    border-radius: 8px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    p {
      color: #333333;
      font-weight: 500;
    }

    div {
      justify-content: center;
      margin-top: 17px;

      button {
        color: #ca53d7;
        background-color: transparent;
        border: 0;
        font-weight: 500;

        font-size: 16px;
      }

      button + button {
        margin-left: 20px;
      }
    }
  }
`;

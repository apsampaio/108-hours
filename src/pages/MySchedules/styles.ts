import styled from "styled-components";

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
      text-decoration:none;
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

export const DayList = styled.ul`
    display: flex;
    flex-direction: column;
`

export const DayItem = styled.main`
  width: 100%;
  max-width: 736px;

  flex-direction: column;

  align-items: flex-start;
  justify-content: flex-start;

  padding-left: 64px;
  padding-right: 64px;
  padding-top: 16px;

  padding-bottom: 28px;
  border-bottom: 1px solid rgba(202, 83, 215, 0.5);

  &:last-of-type{
    border-bottom: 0;
  }

  label {
    color: #32264D;
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
      color: #FFFCFE;
      background: #4A2787;

      padding: 15px 20px;
      border: 1px solid #4A2787;
      border-radius: 8px;

      margin-right: 24px;
      margin-top: 12px;
      cursor: pointer;
    }

  }




`;

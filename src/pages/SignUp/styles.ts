import styled from "styled-components";
//TODO fix layout size

export const Container = styled.div`
  display: flex;

  width: 100vw;
  height: 100vh;

`;

export const Banner = styled.div`
  background: rgba(202, 83, 215, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;

  width: 50vw;
  height: 100vh;

  div {
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

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

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;



  div {
    display: flex;
    justify-content: center;
    align-items: center;
  form {

    min-width: 352px;
    display: flex;
    flex-direction: column;

    h1 {
      color: #32264d;
      font-size: 36px;
      margin-bottom: 20px;
    }

    p {
      color: #333333;
      font-size: 18px;
      font-family: "Roboto";
      width: 250px;
      margin-bottom: 40px;

      line-height: 26px;
    }

    button {
      background: #4a2787;
      border-radius: 8px;
      height: 56px;

      font-weight: 500;
      font-size: 18px;
      letter-spacing: 1px;
      color: #fff;

      border: 0;
      margin-top: 40px;
      margin-bottom: 128px;
    }
  }
}
`;

export const PasswordInputContainer = styled.div`
  background: #fafafc;
  padding: 24px;
  border: 1px solid #e6e6f0;
  border-radius: 0px 0px 8px 8px;
  color: #333333;
  display: flex;
  align-items: center;

  input {
    font-size: 16px;
    color: #333333;
    flex: 1;
    background: transparent;
    border: 0;
  }

  input::-webkit-input-placeholder {
    color: #9c98a6;
  }

  svg {
    margin-left: 16px;
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
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

  @media (max-width: 800px) {
    display: none;
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;

  justify-content: center;
  align-items: center;

  flex-direction: column;
  form {
    display: flex;
    flex-direction: column;
    min-width: 352px;

    h1 {
      color: #32264d;
      font-size: 36px;
      margin-bottom: 40px;
    }

    label {
      display: flex;
      align-items: center;
      color: #9c98a6;
      font-size: 16px;
      margin-top: 24px;
      cursor: pointer;

      svg {
        position: absolute;
      }

      input {
        border: 1px solid #e6e6f0;
        padding: 0;
        appearance: none;

        width: 24px;
        height: 24px;
        margin-right: 16px;
        border-radius: 8px;
        background-color: #fafafc;
      }

      input:hover {
        cursor: pointer;
      }

      input:checked {
        background: #4a2787;
        border: 1px solid #4a2787;
      }
    }
  }

  p {
    color: #333333;
    font-size: 18px;
    font-family: Poppins;

    align-self: auto;

    a {
      font-weight: bold;
      color: #ca53d7;
    }
  }

  @media (max-width: 800px) {
    width: 100vw;

    form {
      min-width: 90vw;
    }

    form p {
      font-size: 12px;
    }
  }
`;

export const Button = styled.button`
  background: #4a2787;
  border-radius: 8px;
  height: 56px;

  font-weight: bold;
  font-size: 18px;
  letter-spacing: 1px;
  color: #fff;

  border: 0;
  margin-top: 40px;
  margin-bottom: 128px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 800px) {
    font-size: 14px;
  }
`;

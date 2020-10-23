import styled from "styled-components";

export const Container = styled.div`
  flex-grow: 0;

  min-height: 140px;
  background: #e5e5e7;

  display: flex;

  justify-content: space-around;

  div {
    height: 140px;
    display: flex;
    flex-direction: column;

    justify-content: space-evenly;
    align-self: center;

    color: #333333;

    strong {
      font-size: 20px;
    }

    svg {
      margin-right: 14px;
    }

    p {
      display: flex;
      align-items: center;
      font-weight: 500;
      font-size: 16px;
    }

    a {
      display: flex;
      align-items: center;
    }
  }

  @media(max-width: 800px) {
    flex-direction: column;
  }
`;

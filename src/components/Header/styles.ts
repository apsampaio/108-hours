import styled from "styled-components";

export const Container = styled.div`
  background: rgba(202, 83, 215, 0.5);
  min-height: 100px;
  flex-grow: 0;

  display: flex;
  flex-direction: row;

  div {
  }
`;

export const Menu = styled.div`
  display: flex;
  flex: 1;

  align-items: center;
  justify-content: center;

  a {
    color: #4a2787;
    font-weight: 500;
    font-size: 20px;
    border-bottom: 5px solid transparent;
  }

  a:hover {
    transition: 0.3s ease;
    border-bottom: 5px solid #8739b3;
    cursor: pointer;
  }

  a + a {
    margin-left: 160px;
  }
`;

export const Dropdown = styled.section`
  position: relative;
  display: inline-block;
  min-width: 300px;
  min-height: 100px;
  flex: 0;

  div {
    display: flex;

    align-items: center;
    justify-content: center;

    padding-top: 20px;

    span {
      padding: 15px 20px 15px 20px;
      border-radius: 50%;
      font-weight: 500;
      font-size: 24px;
      color: #fffcfe;
      background: #ca53d7;
    }

    p {
      margin-left: 16px;

      font-size: 18px;
      color: #333333;
      font-weight: normal;

      strong {
        font-weight: normal;
        color: #4a2787;
      }
    }

    svg {
      margin-left: 16px;
      margin-right: 26px;
    }
  }

  &:hover div + div {
    display: block;
  }

  div + div {
    display: none;
    position: absolute;
    min-width: 300px;
    z-index: 1;

    margin-top: 19px;

    background: #f0f0f7;
    border: 0.5px solid rgba(0, 0, 0, 0.2);
    border-top: none;
    box-sizing: border-box;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.12);

    a {
      display: block;
      padding: 15px;
      font-size: 18px;

      color: #4a2787;
    }

    a:last-of-type {
      border-top: 0.5px solid rgba(0, 0, 0, 0.2);
    }
  }
`;

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
  /* flex-grow: 1; */

  margin: 64px auto;

  border-radius: 8px;
  border: 1px solid rgba(202, 83, 215, 0.5);

  min-width: 736px;
  min-height: 550px;

  background-color: #fff;
  /* background-color: green; */

  display: flex;
  flex-direction: column;

  align-items: left;

  strong {
    color: #32264d;
    font-weight: bold;
    font-size: 24px;
    padding-left: 64px;
    padding-bottom: 7px;
    margin-top: 33px;

    border-bottom: 1px solid rgba(202, 83, 215, 0.5);
  }

  span {
    display: flex;
    justify-content: space-around;

    margin: 16px;
    margin-left: 64px;
    max-width: 290px;
    padding: 10px;

    border: 1px solid #e5e5e7;
    border-radius: 2px;

    p {
      color: #4a2787;
    }
  }

  section {
    flex:1;
    /* background-color:red; */
    padding:0 64px;

    filter: drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.15));

    form {
      /* background-color:blue; */
      
      display:flex;
      justify-content:space-evenly;
      align-items:center;
    }

    form + button {      
      position:absolute;
      right: 64px;
      bottom:32px;

      background-color: #CA53D7;

      border: 1px solid #CA53D7;
      box-sizing: border-box;
      border-radius: 2px;
      padding:8px 16px;

      font-size:14px;
      color:#fff;
    }
  }
  
`;

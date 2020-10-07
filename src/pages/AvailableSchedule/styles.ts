import styled from 'styled-components';

import Select from '../../components/Select';
import CustomButton from '../../components/Button'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  top: 0;
  right: 0;
  left: 0;
  bottom: 0;

  background: #f0f0f7;

  main {
    margin: 64px auto;

    max-width: 740px;
    width:100%;

    border: 1px solid rgba(202, 83, 215, 0.5);
    border-radius: 8px;
    padding:32px;

    header {
      div {
        display:flex;
        align-items:center;
        justify-content:space-between;
      }     

      span {
        font-weight:bold;
        font-size:24px;
      }

      span + span {
        font-weight:bold;
        color: #8257E5;
        font-size:16px;
        cursor: pointer;

      }
    }

  ul li {
    list-style-type: none;

    display: flex;
    justify-content:space-around;  
  }
   
  }
`;

export const SelectDate = styled(Select)`
  width: 70%;
`

export const SelectTime = styled(Select)`
  width: 30%;
`

export const Spacer = styled.div`
  margin-top:16px;
  margin-bottom: 24px;
  border: 1px solid rgba(202, 83, 215, 0.5);
`

export const Button = styled(CustomButton)`
  margin: 40px auto ;
`



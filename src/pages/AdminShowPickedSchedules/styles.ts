import styled from 'styled-components';
import CustomButton from '../../components/Button';

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

  min-width: 800px;
  min-height: 550px;

  background: #fff;
  align-self: center;

  display: flex;
  flex-direction: column;

  align-items: left;

  strong {
    color: #32264d;
    font-weight: bold;
    font-size: 24px;
    padding-left: 64px;
    padding-bottom: 32px;
    margin-top: 32px;

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
    display: flex;
    align-items: left;
  }
`;

export const Button = styled(CustomButton)`
  max-width: 250px;
  margin: 64px 64px auto;
`;

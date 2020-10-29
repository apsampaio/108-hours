import styled from 'styled-components';

export const Table = styled.table`
  margin: 32px 64px;
  width: 80%;
  background-color: #fffcfe;

  box-shadow: 0px 0px 40px rgba(57, 40, 166, 0.15);
  border-radius: 5px;

  tr:hover {
    background-color: #f5f5f5;
  }

  tr:nth-child(even) {
    background-color: rgba(202, 83, 215, 0.5);
  }

  tbody td {
    padding-top: 4px;
    padding-bottom: 4px;
  }
`;

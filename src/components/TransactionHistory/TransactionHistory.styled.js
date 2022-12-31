import styled from '@emotion/styled';

const TransactionHistoryTable = styled.table`
  width: 75%;
  min-width: ${props => props.theme.minWidthOfContainer};
  margin: 0px auto ${props => props.theme.distanceBeetwenSections};
  table-layout: fixed;
  border-collapse: collapse;
  border: 1px solid ${props => props.theme.colors.secondWeightText};

  box-shadow: ${props => props.theme.boxShadows.main};

  tr {
    height: 50px;
  }

  th {
    padding: ${props => props.theme.spacing()};
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.backHeadTable};
    border: 1px solid ${props => props.theme.colors.secondText};
  }

  td {
    padding: ${props => props.theme.spacing()};
    text-align: center;
    border: 1px solid ${props => props.theme.colors.secondText};
  }

  tbody tr:nth-of-type(2n) {
    background-color: ${props => props.theme.colors.backCard};
  }
`;

export { TransactionHistoryTable };

import styled from '@emotion/styled';

const Item = styled.li`
  display: flex;
  gap: 10px;
  align-items: center;
  min-height: 70px;
  padding: ${props => props.theme.spacing()};

  box-shadow: ${props => props.theme.boxShadows.cards};
`;

const Status = styled.span`
  width: 15px;
  height: 15px;
  margin-left: ${props => props.theme.spacing(2)};

  background-color: ${props => (props.isOnline ? 'green' : 'red')};
  border-radius: 50%;
`;

const Name = styled.p`
  font-weight: 600;
  font-size: 20px;
`;

export { Item, Name, Status };

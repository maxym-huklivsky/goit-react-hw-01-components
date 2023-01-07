import styled from '@emotion/styled';

const FrienList = styled.ul`
  width: 25%;
  min-width: ${props => props.theme.minWidthOfContainer};
  margin: 0px auto ${props => props.theme.distanceBeetwenSections};
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing(2)};
`;

export { FrienList };

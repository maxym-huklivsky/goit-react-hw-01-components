import styled from '@emotion/styled';

const StatisticsWrap = styled.div`
  width: 40%;
  min-width: ${props => props.theme.minWidthOfContainer};
  margin: 0px auto ${props => props.theme.distanceBeetwenSections};

  box-shadow: ${props => props.theme.boxShadows.main};
`;

const Title = styled.h2`
  padding: ${props => props.theme.spacing(2)};
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70px;

  color: ${props => props.theme.colors.secondWeightText};
  font-size: 24px;
  text-transform: uppercase;
`;

const StatList = styled.ul`
  display: flex;
  min-height: 80px;
`;

const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: ${props => props.theme.spacing(2)};
  width: 20%;
  padding: ${props => props.theme.spacing(2)};
`;

const Label = styled.span`
  font-size: 14px;
  color: ${props => props.theme.colors.white};
`;

const Percentage = styled.span`
  color: ${props => props.theme.colors.white};
  font-size: 18px;
  font-weight: 600;
`;

export { StatisticsWrap, Title, StatList, Item, Label, Percentage };

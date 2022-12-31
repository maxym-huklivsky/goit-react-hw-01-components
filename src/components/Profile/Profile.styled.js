import styled from '@emotion/styled';

const ProfileInfo = styled.div`
  display: block;
  width: 33%;
  min-width: ${props => props.theme.minWidthOfContainer};
  margin: 50px auto ${props => props.theme.distanceBeetwenSections};

  box-shadow: ${props => props.theme.boxShadows.main};
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${props => props.theme.spacing(4)};
  padding: ${props => props.theme.spacing(8)};
`;

const Avatar = styled.img`
  width: 40%;
  margin: 0 auto;
`;

const Name = styled.p`
  font-weight: 700;
  font-size: 20px;
  color: ${props => props.theme.colors.secondWeightText};
`;

const Tag = styled.p`
  color: ${props => props.theme.colors.secondText};
`;

const Location = styled.p`
  color: ${props => props.theme.colors.secondText};
`;

const Stats = styled.ul`
  display: flex;
`;

const StatsItem = styled.li`
  width: 33.333%;
  padding: ${props => props.theme.spacing()};
  min-height: 70px;
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing()};
  justify-content: center;
  align-items: center;

  background-color: ${props => props.theme.colors.backCard};
  border: 1px solid ${props => props.theme.colors.secondText};
`;

const Label = styled.span`
  color: ${props => props.theme.colors.secondText};
`;

const Quantity = styled.span`
  font-weight: 700;
  font-size: 18px;
`;

export {
  ProfileInfo,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  Stats,
  StatsItem,
  Label,
  Quantity,
};

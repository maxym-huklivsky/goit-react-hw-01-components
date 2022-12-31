import PropTypes from 'prop-types';
import { getRandomColor } from 'utils/getRandomColor';
import {
  StatisticsWrap,
  Title,
  StatList,
  Item,
  Label,
  Percentage,
} from './Statistics.styled';

export function Statistics({ title, stats }) {
  return (
    <StatisticsWrap>
      <Title>{title}</Title>

      <StatList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <Item key={id} style={{ backgroundColor: getRandomColor() }}>
              <Label>{label}</Label>
              <Percentage>{percentage}%</Percentage>
            </Item>
          );
        })}
      </StatList>
    </StatisticsWrap>
  );
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.node.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

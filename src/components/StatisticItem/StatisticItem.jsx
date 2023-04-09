import {
  StatisticBox,
  StatisticText,
  StatisticCounter,
} from './StatisticItem.styled';
import propTypes from 'prop-types';
import { BiBeer } from 'react-icons/bi';

export const StatisticItem = ({ title, total, icon: Icon }) => {
  return (
    <StatisticBox>
      <Icon color="blue" size="30px" />
      <StatisticCounter>{total}</StatisticCounter>
      <StatisticText>{title}</StatisticText>
    </StatisticBox>
  );
};

StatisticItem.propTypes = {
  title: propTypes.string.isRequired,
  total: propTypes.number.isRequired,
  icon: propTypes.func.isRequired,
};

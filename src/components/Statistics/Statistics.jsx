import { StatisticItem } from 'components';
import { StatisticsList, StatisticTitle } from './Statistics.styled';
import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import propTypes from 'prop-types';

const icons = {
  1: FaRegThumbsUp,
  2: MdPeople,
  3: MdOutlineProductionQuantityLimits,
  4: GiTreeDoor,
};

export const Statistics = ({ statTitle, stats }) => {
  return (
    <>
      {statTitle && <StatisticTitle>{statTitle}</StatisticTitle>}

      <StatisticsList>
        {stats.map(({ id, title, total }) => {
          return (
            <StatisticItem
              key={id}
              title={title}
              total={total}
              icon={icons[id]}
            />
          );
        })}
      </StatisticsList>
    </>
  );
};

Statistics.propTypes = {
  statTitle: propTypes.string,
  stats: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      title: propTypes.string.isRequired,
      total: propTypes.number.isRequired,
    }),
  ).isRequired,
};

import PropTypes from 'prop-types';
//import { Ul } from './CastList.styled';
import CastListItem from '../CastListItem/CastListItem';


// передача в компонент відображення одного актора
const CastList = ({ cast }) => {
  return (
    <ul>
      {cast.map(actor => (
        <CastListItem key={actor.cast_id} actor={actor} />
      ))}
    </ul>
  );
};
CastList.propTypes = {
  cast: PropTypes.array.isRequired,
};

export default CastList;

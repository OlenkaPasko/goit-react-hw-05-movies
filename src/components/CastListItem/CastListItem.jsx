import PropTypes from 'prop-types';

// фото, якщо з бекенда не прийшла фотка актора
import noAvatar from '../../images/noAvatar.jpg';


const CastListItem = ({ actor }) => {
  let actorPhoto = noAvatar;
  if (actor.profile_path) {
    actorPhoto = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;
  }

  return (
    <li>
      <div>
        <img src={actorPhoto} alt={actor.name} />
        <div>
          <p>{actor.character}</p>
        </div>
      </div>

      <div>
        <div>{actor.name}</div>
      </div>
    </li>
  );
};

CastListItem.propTypes = {
  actor: PropTypes.object.isRequired,
};

export default CastListItem;

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Cast = () => {
const { movieId } = useParams();
const [castList, setCastList] = useState([]);
    
const API_KEY = '9cbb52e6579c256183b59d31049fbf06';

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    ).then(res =>
      res.json().then(data => {
        setCastList(data.cast);
      })
    );
  }, [movieId]);
  return (
    <>
      {' '}
      {castList.length === 0 && <p>Sorry, there is nothing to view</p>}
      {castList && (
        <ul>
          {castList.map(actor => {
            const { character, name, profile_path, id } = actor;
            return (
              <li key={id}>
                {profile_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                    alt={name}
                    width="200px"
                  />
                ) : (
                  <img
                    src="https://api.themoviedb.org/3/person/person_id/images/"
                    alt={actor.name}
                    width="120px"
                  />
                )}
                <p>{name}</p>
                <p>Character: {character}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

Cast.propTypes = {
  movieId: PropTypes.string,
};

export default Cast;

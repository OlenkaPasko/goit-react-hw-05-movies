import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
//import PropTypes from 'prop-types';
//import CastList from '../CastList/CastList';
import noAvatar from '../../images/noAvatar.jpg';

const Cast = () => {
  const { movieId } = useParams();
  const [castList, setCastList] = useState([]);

  const API_KEY = '9cbb52e6579c256183b59d31049fbf06';
  const BASE_URL = 'https://api.themoviedb.org/3';

  useEffect(() => {
    fetch(
      `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    ).then(res =>
      res.json().then(data => {
        setCastList(data.cast);
      })
    );
  }, [movieId]);
  return (
    <>
      {' '}
      {castList.length === 0 && <p>There is nothing to view</p>}
      {castList && (
        <ul>
          {castList.map(item => {
            const { character, name, profile_path, id } = item;
            return (
              <li key={id}>
                <img
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/original${profile_path}`
                      : noAvatar
                  }
                  alt={name}
                  width="200"
                />
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

export default Cast;

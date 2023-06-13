import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
//import PropTypes from 'prop-types';
import CastList from '../CastList/CastList';

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
      {castList && <CastList cast={castList} />}
      {!castList && (
        <div>
          <p>There is no casts</p>
        </div>
      )}
    </>
  );
};

export default Cast;

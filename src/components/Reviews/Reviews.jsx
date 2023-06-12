import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Reviews = () => {
const { movieId } = useParams();
const [reviews, setReviews] = useState([]);
    
const API_KEY = '9cbb52e6579c256183b59d31049fbf06';

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    ).then(res =>
      res.json().then(data => {
        setReviews(data.results);
      })
    );
  }, [movieId]);

  return (
    <>
      {reviews.length === 0 && <p>There is nothing to view</p>}
      {reviews.length > 0 && (
        <ul>
          {reviews.map(item => {
            const { author, content, id } = item;
            return (
              <li key={id}>
                <p>{author}:</p> <p>{content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

Reviews.propTypes = {
  movieId: PropTypes.string,
};

export default Reviews;

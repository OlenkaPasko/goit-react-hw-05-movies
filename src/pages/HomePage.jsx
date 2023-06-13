import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

//import { getPopularMovies } from '../servises/servises';

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);
  const location = useLocation();

  const API_KEY = '9cbb52e6579c256183b59d31049fbf06';
  const BASE_URL = 'https://api.themoviedb.org/3';

  useEffect(() => {
    fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`)
      .then(res => res.json())
      .then(data => setTopMovies(data.results));
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {topMovies.map(item => {
          const { id, title, name } = item;
          return (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title || name}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default Home;

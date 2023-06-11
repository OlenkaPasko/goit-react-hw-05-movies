import { Routes, Route, NavLink } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/movies">Movies</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="movies" element={<div>Movies</div>} />
        <Route path="movies/:movieId" element={<div>MovieDetailsPage</div>} />
        <Route path="cast" element={<div>Cast</div>} />
        <Route path="reviews" element={<div>Reviews</div>} />
      </Routes>
    </div>
  );
};

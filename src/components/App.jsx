import { Routes, Route, NavLink } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/movi">Movies</NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/movi" element={<div>Movies</div>} />
      </Routes>
    </div>
  );
};

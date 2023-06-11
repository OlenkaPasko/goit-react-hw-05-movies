import { Routes, Route, NavLink } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movi">Movies</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/movi" element={<div>Movies</div>} />
      </Routes>
    </div>
  );
};

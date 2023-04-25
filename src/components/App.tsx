import { Routes, Route } from 'react-router-dom';
import { Movies } from '../pages/Movies';
import { MovieDetails } from '../pages/MovieDetails';
import { NotFound } from '../pages/NotFound/NotFound';
import { Layout } from './Layout/Layout';
import { Home } from '../pages/HomePage/Home';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="/movies" element={<Movies />} />

        <Route path="/movies/:movieId" element={<MovieDetails />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

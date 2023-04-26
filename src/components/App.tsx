import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { MovieDetails } from '../pages/MovieDetails/MovieDetails';
import { NotFound } from '../pages/NotFound/NotFound';
import { Layout } from './Layout/Layout';
import { Home } from '../pages/HomePage/Home';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
import { Movies } from '../components/Movies/Movies';

export const App = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

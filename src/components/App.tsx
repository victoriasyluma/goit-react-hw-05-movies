import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));

const Layout = lazy(() => import('./Layout/Layout'));
const Home = lazy(() => import('../pages/HomePage/Home'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const Movies = lazy(() => import('../pages/MoviesSearchPage/Movies'));

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
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

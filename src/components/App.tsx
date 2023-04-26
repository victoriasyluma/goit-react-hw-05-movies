import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));
const Layout = lazy(() => import('./Layout/Layout'));
const Home = lazy(() => import('../pages/HomePage/Home'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const Movies = lazy(() => import('../components/Movies/Movies'));

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

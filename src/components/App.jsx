import Home from "pages/Home";
import MovieDetails from "pages/MovieDetails";
import Movies from "pages/Movies";
import { Routes, Route } from "react-router-dom";
import Cast from "./Cast";
import Reviews from "./Reviews";
import { SharedLayout } from "./SharedLayout";
import { Suspense } from 'react';

export const App = () => {
  return (
    <div>
      <Suspense fallback="Loading...">
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId" element={<MovieDetails />} >
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<Home />} />
          </Route>
        {/* <Route path="/about" element={<About />}/> */}
        </Routes>
      </Suspense>
    </div>
  );
};

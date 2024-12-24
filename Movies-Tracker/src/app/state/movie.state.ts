import { Movie } from '../models/movie.model';

export interface MovieState {
  movies: Movie[];
  favoriteMovies: Movie[];
}

export const initialMovieState: MovieState = {
  movies: [],
  favoriteMovies: []
};

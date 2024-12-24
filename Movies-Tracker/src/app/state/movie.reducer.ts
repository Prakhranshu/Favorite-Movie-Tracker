import { createReducer, on } from '@ngrx/store';
import { MovieState, initialMovieState } from './movie.state';
import { loadMovies, addMovie, toggleFavorite, removeMovie, updateMovie, fetchMoviesSuccess } from './movie.actions';

export const movieReducer = createReducer(
  initialMovieState,
  on(loadMovies, (state, { movies }) => ({ ...state, movies })),
  on(fetchMoviesSuccess, (state, { movies }) => ({
    ...state,
    movies: [...movies],
  })),
  on(addMovie, (state, { movie }) => ({ ...state, movies: [...state.movies, movie] })),
  on(toggleFavorite, (state, { movieId }) => {
    const updatedMovies = state.movies.map(movie => 
      movie.id === movieId ? { ...movie, isFavorite: !movie.isFavorite } : movie
    );
    const favoriteMovies = updatedMovies.filter(movie => movie.isFavorite);
    return { ...state, movies: updatedMovies, favoriteMovies };
  }),
  on(removeMovie, (state, { movieId }) => {
    const updatedMovies = state.movies.filter(movie => movie.id !== movieId);
    const favoriteMovies = updatedMovies.filter(movie => movie.isFavorite);
    return { ...state, movies: updatedMovies, favoriteMovies };
  }),
  on(updateMovie, (state, { movie }) => ({
    ...state,
    movies: state.movies.map(m =>
      m.id === movie.id ? { ...m, isFavorite: movie.isFavorite } : m
    ),
  }))
);

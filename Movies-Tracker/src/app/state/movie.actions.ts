import { createAction, props } from '@ngrx/store';
import { Movie } from '../models/movie.model';

// Action to load movies
export const loadMovies = createAction('[Movies] Load Movies', props<{ movies: Movie[] }>());

// Action to add a movie
export const addMovie = createAction('[Movies] Add Movie', props<{ movie: Movie }>());

// Action to toggle a movie as favorite
export const toggleFavorite = createAction('[Movies] Toggle Favorite', props<{ movieId: number }>());

// Action to remove a movie
export const removeMovie = createAction('[Movies] Remove Movie', props<{ movieId: number }>() );

// Action to update a movie
export const updateMovie = createAction('[Movie] Update Movie',  props<{ movie: Movie }>() );

export const fetchMovies = createAction('[Movie API] Fetch Movies');
export const fetchMoviesSuccess = createAction(
  '[Movie API] Fetch Movies Success',
  props<{ movies: Movie[] }>()
);
export const fetchMoviesFailure = createAction(
  '[Movie API] Fetch Movies Failure',
  props<{ error: string }>()
);
1
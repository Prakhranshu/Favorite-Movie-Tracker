import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MovieService } from '../service/movie.service';
import { fetchMovies, fetchMoviesSuccess, fetchMoviesFailure } from './movie.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class MovieEffects {
  constructor(private actions$: Actions, private movieService: MovieService) {}

  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchMovies),
      mergeMap(() =>
        this.movieService.getPopularMovies().pipe(
          map((response) => {
            // Convert TMDb API data to your Movie model
            const movies = response.results.map((movie: any) => ({
              id: movie.id,
              title: movie.title,
              genre: movie.genre_ids[0], // Map genre IDs as needed
              rating: movie.vote_average,
              isFavorite: false,
              poster_path: movie.poster_path,
              overview: movie.overview
            }));
            return fetchMoviesSuccess({ movies });
          }),
          catchError((error) => of(fetchMoviesFailure({ error: error.message })))
        )
      )
    )
  );
}

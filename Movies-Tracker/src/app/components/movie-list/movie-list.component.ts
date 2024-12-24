import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Movie } from '../../models/movie.model';
import { loadMovies, toggleFavorite, removeMovie, updateMovie, fetchMovies } from '../../state/movie.actions';
import { MovieState } from '../../state/movie.state';
import { addFavorite, removeFavorite } from '../../store/actions/favorite.actions';
import { Favorite } from '../../store/models/favorite.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movies$: Observable<Movie[]>;

  constructor(private store: Store<{ movieState: MovieState }>) {
    this.movies$ = store.select(state => state.movieState.movies);
  }

  ngOnInit(): void {
    // // Mock data for movies
    // const movies = [
    //   { id: 1, title: 'Inception', genre: 'Sci-Fi', rating: 8.8, isFavorite: false },
    //   { id: 2, title: 'The Dark Knight', genre: 'Action', rating: 9.0, isFavorite: false },
    //   { id: 3, title: 'The Matrix', genre: 'Sci-Fi', rating: 8.7, isFavorite: false }
    // ];
    // this.store.dispatch(loadMovies({ movies }));
    this.store.dispatch(fetchMovies());
  }

  toggleFavorite(movie: Movie) {
    console.log('Toggle favorite triggered for:', movie.title);
    if (movie.isFavorite) {
      this.store.dispatch(removeFavorite({ id: movie.id }));
    } else {
      const favorite = this.toFavorite(movie);
      this.store.dispatch(addFavorite({ favorite }));
      // Also, dispatch a movie update to reflect the 'isFavorite' change if needed
      // this.store.dispatch(updateMovie({ movie: { ...movie, isFavorite: true } }));
    }
    this.store.dispatch(
      updateMovie({ movie: { ...movie, isFavorite: !movie.isFavorite } })
    );
  }
  

  removeMovie(movieId: number): void {
    this.store.dispatch(removeMovie({ movieId: movieId }));
  }

  toFavorite(movie: Movie): Favorite {
    return {
      id: movie.id,
      title: movie.title,
      description: `Description: for ${movie.overview}`,  // You can replace this with actual data if needed
    };
  }
  
}

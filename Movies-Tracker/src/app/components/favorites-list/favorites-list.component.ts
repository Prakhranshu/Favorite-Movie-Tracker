import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Favorite } from '../../store/models/favorite.model';
import { Store } from '@ngrx/store';
import { selectAllFavorites } from '../../store/selectors/favorite.selectors';
import { clearFavorites, removeFavorite } from '../../store/actions/favorite.actions';
import { FavoriteState } from '../../store/reducers/favorite.reducer';

@Component({
  selector: 'app-favorites-list',
  templateUrl: './favorites-list.component.html',
  styleUrl: './favorites-list.component.scss'
})
export class FavoritesListComponent {
  favorites$: Observable<Favorite[]>;

  constructor(private store: Store<{ favorite: FavoriteState }>) {
    this.favorites$ = this.store.select(state => state.favorite.favorites);
  }

  removeFavorite(id: number) {
    this.store.dispatch(removeFavorite({ id }));
  }

  clearFavorites() {
    this.store.dispatch(clearFavorites());
  }
}

import { createSelector } from '@ngrx/store';
import { FavoriteState } from '../reducers/favorite.reducer';

export const selectFavoriteState = (state: any) => state.favorite;

export const selectAllFavorites = createSelector(
  selectFavoriteState,
  (state: FavoriteState) => state.favorites
);

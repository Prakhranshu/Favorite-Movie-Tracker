import { createAction, props } from '@ngrx/store';
import { Favorite } from '../models/favorite.model';

// Add to favorites
export const addFavorite = createAction(
  '[Favorites] Add Favorite',
  props<{ favorite: Favorite }>()
);

// Remove from favorites
export const removeFavorite = createAction(
  '[Favorites] Remove Favorite',
  props<{ id: number }>()
);

// Clear all favorites
export const clearFavorites = createAction('[Favorites] Clear Favorites');

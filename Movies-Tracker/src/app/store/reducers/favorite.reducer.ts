import { createReducer, on } from '@ngrx/store';
import { addFavorite, removeFavorite, clearFavorites } from '../actions/favorite.actions';
import { Favorite } from '../models/favorite.model';

export interface FavoriteState {
    favorites: Favorite[];
}

const initialState: FavoriteState = {
    favorites: [],
};

export const favoriteReducer = createReducer(
    initialState,
    on(addFavorite, (state, { favorite }) => ({
        ...state,
        favorites: [...state.favorites, favorite],
    })),
    on(removeFavorite, (state, { id }) => ({
        ...state,
        favorites: state.favorites.filter(fav => fav.id !== id),
    })),
    on(clearFavorites, state => ({
        ...state,
        favorites: [],
    }))
);
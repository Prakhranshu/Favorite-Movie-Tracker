import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { movieReducer } from './state/movie.reducer';
import { favoriteReducer } from './store/reducers/favorite.reducer';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { MovieEffects } from './state/movie.effects';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { FavoritesListComponent } from './components/favorites-list/favorites-list.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    FavoritesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatMenuModule,
    MatButtonModule,
    StoreModule.forRoot({movieState: movieReducer, favorite: favoriteReducer}), // Add your reducers here later
    EffectsModule.forRoot([MovieEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25 }) // For debugging
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

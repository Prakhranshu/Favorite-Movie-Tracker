import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private baseUrl = 'https://api.themoviedb.org/3';
  private apiKey = 'Your_API_KEY_FROM_TMDB'; // Replace with your TMDB API key

  constructor(private http: HttpClient) { }

  getPopularMovies(): Observable<any> {
    const url = `${this.baseUrl}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;
    return this.http.get(url, {
      headers: { Authorization: `Bearer YOUR-ACCESS_TOKEN_FROM_TMDB` },
    });
  }
}

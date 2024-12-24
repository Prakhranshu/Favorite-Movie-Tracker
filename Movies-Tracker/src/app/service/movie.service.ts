import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private baseUrl = 'https://api.themoviedb.org/3';
  private apiKey = 'd0931b1137cb48bf147048f719b33bde'; // Replace with your TMDB API key

  constructor(private http: HttpClient) { }

  getPopularMovies(): Observable<any> {
    const url = `${this.baseUrl}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;
    return this.http.get(url, {
      headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMDkzMWIxMTM3Y2I0OGJmMTQ3MDQ4ZjcxOWIzM2JkZSIsIm5iZiI6MTczNDg5NTMxNy43OTcsInN1YiI6IjY3Njg2NmQ1ZWMyNzE4MzI2MDVjY2NiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8IgTO2rbFMx4d1WXAflgt01OzMJRstB_Y7l-_cxgLyw` },
    });
  }
}

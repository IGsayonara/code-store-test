import { IMovie } from '../interfaces/movie.interface';
import { IFullMovie } from '../interfaces/fullMovie.interface';
import * as process from 'process';

export class MovieToPdfSerializer {
  // Base URL for the movie links
  private baseUrl: string = process.env.APP_BASE_URL + '/movies';

  // Method to generate stars based on vote average
  private generateStars(voteAverage: number): string {
    const fullStars = Math.round(voteAverage);
    const emptyStars = 10 - fullStars;
    return `${'&#9733;'.repeat(fullStars)}${'&#9734;'.repeat(emptyStars)}`;
  }

  // Method to generate HTML for a single movie
  private serializeMovie(movie: IMovie): string {
    const movieLink = `${this.baseUrl}/${movie.id}`;
    const stars = this.generateStars(movie.vote_average);
    return `
      <tr class="movie">
        <td><a href="${movieLink}" class="title">${movie.title}</a></td>
        <td class="release-date">${movie.release_date}</td>
        <td class="stars">${stars}</td>
        <td class="vote-average">${movie.vote_average.toFixed(1)}</td>
      </tr>
    `;
  }

  // Method to generate HTML for a list of movies
  serializeMovies(movies: IMovie[]): string {
    const moviesHtml = movies
      .map((movie) => this.serializeMovie(movie))
      .join('');
    return `
      <html>
        <head>
          <title>Popular movies</title>
          <style>
            body { font-family: 'Helvetica', sans-serif; }
            table { width: 100%; border-collapse: collapse; }
            th, td { padding: 10px; text-align: left; }
            th { background-color: #f2f2f2; }
            .movie { border-bottom: 1px solid #ccc; }
            .title { font-size: 16px; font-weight: bold; }
            .release-date, .vote-average { font-size: 12px; }
            .stars { font-size: 14px; }
            .vote-average { font-weight: bold; margin-left: 10px; }
          </style>
        </head>
        <body>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Release Date</th>
                <th>Rating</th>
                <th>Vote Average</th>
              </tr>
            </thead>
            <tbody>
              ${moviesHtml}
            </tbody>
          </table>
        </body>
      </html>
    `;
  }

  serializeFullMovie(movie: IFullMovie): string {
    const stars = this.generateStars(movie.vote_average);
    const googleBaseUrl = 'https://www.google.com/search';
    const queryParam = encodeURIComponent(movie.title);
    const googleLink = `${googleBaseUrl}?q=${queryParam}`;

    return `
      <html>
        <head>
          <title>${movie.title}</title>
          <style>
            body { font-family: 'Helvetica', sans-serif; }
            .container { display: flex; }
            .poster-column { flex: 0 0 auto; }
            .details-column { flex: 1 1 auto; padding-left: 20px; }
            table { width: 100%; border-collapse: collapse; }
            th, td { padding: 10px; text-align: left; }
            th { background-color: #f2f2f2; }
            .title { font-size: 20px; font-weight: bold; }
            .release-date, .vote-average { font-size: 16px; }
            .stars { font-size: 18px; }
            .poster { max-width: 200px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="poster-column">
              <img src="${process.env.MOVIEDB_IMAGES_URL}/${movie.poster_image}" alt="Poster" class="poster">
            </div>
            <div class="details-column">
              <h1 class="title">${movie.title}</h1>
              <p class="release-date">Release Date: ${movie.release_date}</p>
              <p class="stars">Rating: ${stars}</p>
              <p class="vote-average">Vote Average: ${movie.vote_average.toFixed(1)}</p>
              <a href="${googleLink}" class="movie-link">View More Details on Google!</a>
            </div>
          </div>
        </body>
      </html>
    `;
  }
}

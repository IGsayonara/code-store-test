import { IMovie } from '../interfaces/movie.interface';
import { IFullMovie } from '../interfaces/fullMovie.interface';

export class MovieToPdfSerializer {
  // Base URL for the movie links (you should replace this with your actual base URL)
  private baseUrl: string = 'http://localhost:3000/movies';

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

  public serializeFullMovie(movie: IFullMovie): string {
    const movieLink = `${this.baseUrl}/${movie.id}`;
    const stars = this.generateStars(movie.vote_average);
    return `
      <html>
        <head>
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
            .poster { max-width: 200px; }
          </style>
        </head>
        <body>
          <table>
            <tr>
              <td rowspan="4"><img src="https://image.tmdb.org/t/p/original/${movie.poster_image}" alt="${movie.poster_image}" class="poster"></td>
              <td><a href="${movieLink}" class="title">${movie.title}</a></td>
              <td class="release-date">${movie.release_date}</td>
            </tr>
            <tr>
              <td class="stars">${stars}</td>
              <td class="vote-average">${movie.vote_average.toFixed(1)}</td>
            </tr>
          </table>
        </body>
      </html>
    `;
  }
}

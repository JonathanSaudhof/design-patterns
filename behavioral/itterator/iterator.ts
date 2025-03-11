interface IMediaIterator<T extends object> {
  next(): T;
  rewind(): T;
  hasNext(): boolean;
}

interface IMediaCollection<T extends object> {
  addItem(item: T): void;
  getIterator(): IMediaIterator<T>;
}

type Movie = {
  name: string;
  year: number;
};

class MoviesIterator implements IMediaIterator<Movie> {
  private collection: MovieCollection;
  private position: number = 0;

  constructor(collection: MovieCollection) {
    this.collection = collection;
  }

  rewind(): Movie {
    this.position = 0;
    return this.getMovieList()[this.position]!;
  }

  next(): Movie {
    const moviesList = this.getMovieList();
    const movie = moviesList[this.position];

    this.position = moviesList.length > this.position ? this.position + 1 : 0;

    if (!movie) {
      throw new Error("No more elements in the collection.");
    }
    return movie;
  }

  hasNext(): boolean {
    const moviesList = this.getMovieList();
    return this.position < moviesList.length;
  }

  private getMovieList(): Movie[] {
    return this.collection.getElements();
  }
}

export class MovieCollection implements IMediaCollection<Movie> {
  private movies: Movie[] = [];

  addItem(item: Movie): void {
    this.movies.push(item);
  }

  getIterator(): IMediaIterator<Movie> {
    return new MoviesIterator(this);
  }

  getElements(): Movie[] {
    return this.movies;
  }
}

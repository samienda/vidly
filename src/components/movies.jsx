import React, { Component } from "react";

import "font-awesome/css/font-awesome.css";
import Pagination from "./common/pagination";
import ListGroup from "./common/listGroup";
import MoviesTable from "./moviesTable";
import { paginate } from "../utils/paginate";
import { getMovies } from "../services/fakeMoveieService";

import { getGenres } from "../services/fakeGenreService";

class Movies extends Component {
  state = {
    movies: [],
    pageSize: 4,
    currentPage: 1,
    currentGenre: "All Genres",
    genres: [],
  };

  componentDidMount() {
    const genres = [{ name: "All Genres" }, ...getGenres()];

    this.setState({ movies: getMovies(), genres });
  }

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies: movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreChange = (genre) => {
    this.setState({ currentGenre: genre, currentPage: 1 });
  };

  toggleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movie };
    movies[index].liked = movie.liked ? false : true;
    this.setState({ movies });
  };
  render() {
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      currentGenre,
      genres,
    } = this.state;

    if (this.state.movies.length === 0) {
      return <p>no movies</p>;
    }

    const filteredmovies =
      currentGenre && currentGenre._id
        ? allMovies.filter((m) => m.genre._id === currentGenre._id)
        : allMovies;
    const movies = paginate(filteredmovies, currentPage, pageSize);
    // console.log(filteredmovies);

    return (
      <div className="m-5">
        <p>showing {filteredmovies.length} movies in the database</p>
        {this.getMoviesClass(
          movies,
          pageSize,
          currentPage,
          currentGenre,
          genres,
          movies.length
        )}
      </div>
    );
  }

  getMoviesClass(
    movies,
    pageSize,
    currentPage,
    currentGenre,
    genres,
    filteredcount
  ) {
    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={genres}
            currentGenre={currentGenre}
            onGenreChange={this.handleGenreChange}
          />
        </div>
        <div className="col">
          <MoviesTable
            movies={movies}
            onLike={this.toggleLike}
            onDelete={this.handleDelete}
          />
          <Pagination
            itemsCount={filteredcount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}
export default Movies;

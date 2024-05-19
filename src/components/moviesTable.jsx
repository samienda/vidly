import React, { Component } from "react";
import Like from "./common/like";

const MoviesTable = (props) => {
    const { movies} = props;
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">title</th>
          <th scope="col">genre</th>
          <th scope="col">stock</th>
          <th scope="col">rate</th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {props.movies.map((movie) => (
          <tr key={movie._id}>
            <th>{movie.title}</th>
            <th>{movie.genre.name}</th>
            <th>{movie.numberInStock}</th>
            <th>{movie.dailyRentalRate}</th>
            <th>
              <Like
                liked={movie.liked}
                onClick={() => this.toggleLike(movie)}
              />
            </th>
            <th>
              <button
                className="badge bg-danger"
                onClick={() => this.handleDelete(movie)}
              >
                Delete
              </button>
            </th>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MoviesTable;

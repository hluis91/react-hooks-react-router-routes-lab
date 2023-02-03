import React from "react";
import { movies } from "../data";
console.log("HI:", movies)

const displayMovies = movies.map((movie) => {
  return (
    <div key={movie.title}>
      <h2>Name: {movie.title}</h2>
      <p>Time: {movie.time}</p>
      <p>Genres</p>
      <ul>
        {movie.genres.map((genre => {
          return (
            <li key={genre}>{genre}</li>
          )
        }))}
      </ul>
    </div>

  )
})



function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      {displayMovies}
    </div>
  )
}

export default Movies;

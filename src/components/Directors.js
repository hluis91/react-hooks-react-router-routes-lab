import React from "react";
import { directors } from "../data";

const displayDirectors = directors.map((director) => {
  return (
    <div key={director.name}>
      <h2>Name: {director.name}</h2>
      <p>Movies:</p>
      <ul>
        {director.movies.map((movie) => {
          return (
            <li key={movie}>{movie}</li>
          )
        })}
      </ul>
    </div>
  )
})

function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
      {displayDirectors}
    </div>);
}

export default Directors;

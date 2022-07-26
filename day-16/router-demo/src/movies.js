import {Link,useParams} from "react-router-dom";
import  Movies from "./App";

export  function MovieList({ movies }) {
    return (
      <div>
        <h2>Movies</h2>
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <Link to={`./${movie.id}`}>{movie.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  export function MovieDetail() {
    let { id } = useParams();
    id = Number(id);
    const movie = Movies.find((movie) => movie.id === id);
  
    return (
      <div>
        <h3>{movie.name}</h3>
        <p>{movie.description}</p>
      </div>
    );
  }
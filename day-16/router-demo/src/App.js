
import './App.css';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Movie from './movie';
import { MovieList, MovieDetail} from './movies';


function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/print">Print</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
            <li>
              <Link to="/card">Card</Link>
            </li>

          </ul>
        </nav>
        <div className='container'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/print" element={<Print />} />
            <Route path="/movies" element={<MovieList movies={movies} />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/card" element={<Card />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>

  );
}


export  const movies = [
  new Movie(
    1,
    " Titanic",
    "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
    "Drama"
  ),
  new Movie(
    2,
    " E.T. the Extra-Terrestrial",
    "A troubled child summons the courage to help a friendly alien escape Earth and return to his home world.",
    "Fantasy"
  ),
  new Movie(
    3,
    "The Wizard of Oz",
    // tslint:disable-next-line:max-line-length
    "Dorothy Gale is swept away from a farm in Kansas to a magical land of Oz in a tornado and embarks on a quest with her new friends to see the Wizard who can help her return home in Kansas and help her friends as well.",
    "Fantasy"
  ),
  new Movie(
    4,
    "Star Wars: Episode IV - A New Hope ",
    // tslint:disable-next-line:max-line-length
    "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire/`s world-destroying battle-station while also attempting to rescue Princess Leia from the evil Darth Vader.",
    "Action"
  ),
];

export default App;


function Print() {
  return   <div>
    <h2>Print</h2>;
    <button>print</button>;
  </div>

}
function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Contact() {
  return <h2>Contact</h2>;
}
function Card() {
  return <h2>Card</h2>;
}
function NotFound() {
  return (
    <div>
      <h2>Uh oh.</h2>
      <p>
        The page you requested could not be found. Is there any chance you
        were looking for one of these?
      </p>

    </div>

  );
}

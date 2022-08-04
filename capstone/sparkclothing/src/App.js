import React from 'react';
import './App.css';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">LOGO</Link>
            </li>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/aboutus">Aboutus</Link>
            </li>
            <li>
              <Link to="/contactUs">ContactUs</Link>
            </li>
           

        </ul>
        </nav>
        <div className='container'>
          <Routes>
            <Route path="/" element={<Logo />} />
            <Route path="/HOME" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contactUs" element={<ContactUs/>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;



function Logo() {
  return <h2>Logo</h2>;
}

function Home() {
  return <h2>Home</h2>;
}

function ContactUs() {
  return <h2>ContactUs</h2>;
}
function Products() {
  return <h2>Products</h2>;
}
function AboutUs () {
  return <h2>AboutUs</h2>;
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


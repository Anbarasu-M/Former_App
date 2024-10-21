import React, { useState } from 'react';
import { Link, Outlet,useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar/navbar';
import './home.css';
import homeImage from './image/fr6.jpg';

export const Home = () => {
  const location = useLocation();
  const [linkClicked, setLinkClicked] = useState(false);
  const handleLinkClick = () => {
    setLinkClicked(true);
  };

  return (
    <div className="Full_Page">
      <header>
        <title>My App</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
        <script
          src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
          integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js"
          integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js"
          integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
          crossorigin="anonymous"
        ></script>
        <Navbar />
      </header>
      <body >
      <div className="Full">
        <br />
        {!linkClicked && location.pathname === '/' &&(
          <>
          <div className="btn btn-info ml-5">            <Link to="/register" onClick={handleLinkClick}>
              Register Here
            </Link></div>

           <div className="btn btn-info ml-3"><Link to="/login" onClick={handleLinkClick}>
              Login Here
            </Link></div> 
          </>
        )}
        <br />
        <Outlet />
        </div>
      </body>
    </div>
  );
};

// export default Home;
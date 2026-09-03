import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Movies</h1>
      <div className="navbar_links">
        <a href="#popular" className="navbar_emoji">
          Popular
        </a>
        <a href="#top_rated" className="navbar_emoji">
          Top Rated
        </a>
        <a href="#upcoming" className="navbar_emoji">
          Upcoming
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

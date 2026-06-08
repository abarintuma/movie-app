import "./App.css";
import Navbar from "./components/navbar/Navbar.jsx";
import MovieList from "./components/movieList/MovieList.jsx";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <MovieList type="popular" title="popular" />
        <MovieList type="top_rated" title="top_rated" />
        <MovieList type="upcoming" title="upcoming" />
      </main>
    </div>
  );
};

export default App;

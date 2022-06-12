import { useEffect, useState } from "react";
import MovieCard from "./components/MovieCard";
import {fetchMovieList} from "./api";



let filterMovieList = (list, query) => {

  let searchString = query.toLowerCase();

  return list.filter((item) => {
    const {Title, Genre,Director,Writer,Actors,Plot,Language} = item;
    const title = Title.toLowerCase();
    const director = Director.toLowerCase();
    const writer = Writer.toLowerCase();
    const actors = Actors.toLowerCase();
    const plot = Plot.toLowerCase();
    const language = Language.toLowerCase();
    const genre = Genre.toLowerCase();

    return (title.indexOf(searchString) !== -1 || director.indexOf(searchString) !== -1 || writer.indexOf(searchString) !== -1 || actors.indexOf(searchString) !== -1 ||
        plot.indexOf(searchString) !== -1 || language.indexOf(searchString) !== -1 || genre.indexOf(searchString) !== -1)
  })

}

export default function Index(props) {
  const [movieData, UpdateMovieData] = useState([]);
  const {searchQuery} = props;
  useEffect(() => {
    const apiData = fetchMovieList();
    UpdateMovieData(apiData);

  }, []);
  const filteredMovies = filterMovieList(movieData, searchQuery);

  const componentList = filteredMovies.map((item, i) => {

    const {Title, Poster,imdbID} = item;
    const card = <MovieCard title={Title} poster={Poster} key={imdbID}/>;
    if(i === 6){
      let detailCard = <div className="detail-card"></div>

    }

    return card
  })

  return (
    <div className="movie-list-container">
      {componentList}
    </div>
  );
}
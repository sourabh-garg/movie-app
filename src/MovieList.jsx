import {useEffect, useState} from "react";
import MovieCard from "./components/MovieCard";
import {fetchMovieList} from "./api";
import MovieDetailCard from "./components/MovieDetailCard";
import {isMobile} from 'react-device-detect';

function filterMovieList(list, query) {

    let searchString = query.toLowerCase();

    return list.filter((item) => {
        const {Title, Genre, Director, Writer, Actors, Plot, Language} = item;
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

function createListOfList(array, k) {
    if(array.length === 0){
        return [];
    }

    let results = [];

    let tempResult = [];

    array.forEach((item) => {

        if (tempResult.length === k) {
            results.push([...tempResult]);
            tempResult = [];
        }
        tempResult.push(item);
    });

    if (tempResult.length > 0) {
        results.push([...tempResult]);
    }
    return results;
}


export default function Index(props) {
    const [movieData, UpdateMovieData] = useState([]);
    const [selectedId, updateSelectedId] = useState(null);
    const {searchQuery} = props;
    useEffect(() => {
        const apiData = fetchMovieList();
        UpdateMovieData(apiData);
        updateSelectedId(null);
    }, [searchQuery]);
    const filteredMovies = filterMovieList(movieData, searchQuery);
    const numOfItemsPerRow = isMobile ? 2 : 5;
    const listOfList = createListOfList(filteredMovies, numOfItemsPerRow);

    const componentList = listOfList.map((list, i) => {

        const cardList = list.map((item) => {
            const {Title, Poster, imdbID} = item;
            return <MovieCard title={Title} poster={Poster} key={imdbID+"-"+i} id={imdbID+"-"+i}/>;
        });

        let detailCard = null;

        if(selectedId){
            let idArr = selectedId.split("-");
            if(parseInt(idArr[1],10) === i){
                let detailData = filteredMovies.filter((item) => item.imdbID === idArr[0])[0];
                console.log(detailData);
                detailCard = <MovieDetailCard {...detailData} key={selectedId}/>
            }
        }

        return  <div className="movie-list-container" key={i}>
                  {detailCard}
                  {cardList}
                </div>;
    });

    return (
        <div className="movie-outer-container" onClick={(e) => {
            console.log(e.target);
            updateSelectedId(e.target.id);
        }}>
            {componentList}
            {componentList.length === 0 && searchQuery && <p className="not-found">No results found for your search. </p>}
        </div>
    );
}
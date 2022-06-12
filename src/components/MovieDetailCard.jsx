import Image from "./Image";
import {isMobile} from 'react-device-detect';

import {useEffect, useRef} from "react";

export default function Index(props) {
    const {Title, Poster, Year, Runtime, Director, Language, Plot, imdbRating} = props;
    let ref = useRef();

    useEffect(() => {
        setTimeout(() => {
            if(ref && ref.current){
                ref.current.scrollIntoView({
                    behavior: 'smooth',
                });
            }

        },10)

    },[]);

    return (
           <div className="box-container" ref={ref}>
               {isMobile ? <div className="movie-card-detail animate-card" >

                       <div className="overlay"/>
                       <div className="flex">
                           <div className="poster"><Image image={Poster} alt={Title}/></div>
                           <div className="movie-details">
                               <Rating rating={imdbRating}/>
                               <Detail label="Year" info={Year}/>
                               <Detail label="Running Time" info={Runtime}/>
                               <Detail label="Directed by" info={Director}/>
                               <Detail label="Language" info={Language}/>
                           </div>
                       </div>

                       <p className="detail-title">{Title}</p>
                       <p className="description">{Plot}</p>

                       <div className="flex button-container">
                           <button className="primary-button">Play Movie</button>
                           <button className="chevron-button margin-left-16">Watch Trailer</button>
                       </div>


                   </div> :
                   <div className="movie-card-detail animate-card">

                       <div className="overlay"/>

                       <div className="poster"><Image image={Poster} alt={Title}/></div>
                       <div className="movie-details">
                           <p className="detail-title">{Title}</p>

                           <Rating rating={imdbRating}/>
                           <Detail label="Year" info={Year}/>
                           <Detail label="Running Time" info={Runtime}/>
                           <Detail label="Directed by" info={Director}/>
                           <Detail label="Language" info={Language}/>

                           <p className="description">{Plot}</p>

                           <div className="flex button-container">
                               <button className="primary-button">Play Movie</button>
                               <button className="chevron-button margin-left-16">Watch Trailer</button>
                           </div>

                       </div>
                   </div>}
           </div>


    );
}

function Detail({label, info}) {

    return <div className="info">
        <span>{label} : </span>
        <span>{info}</span>
    </div>

}

function Rating({rating}) {

    if (rating === "N/A") {
        return <div className="rating-container">
            <p>N/A</p>
        </div>
    }

    let style = {width: `${rating * 10}%`}

    return <div className="rating-container">
        <div className="rating">
            <span style={style}/>
        </div>
        <p>{rating}/10</p>
    </div>

}
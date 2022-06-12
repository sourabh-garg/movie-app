import {useRef, useState} from "react";

export default function Index(props) {
    const [searchActive, updateSearchActive] = useState(false);
    const {updateSearchQuery, value} = props;


    return (
        <div className="header">
            
            <div className={`search-box ${searchActive ? "active-box": ""}`}>
                <img className="search-icon" src="/search.svg" alt="search"
                     onClick={() => {
                         updateSearchActive(true)}}/>
                <input type="text" placeholder="Title, Movies, Keyword" value={value} onChange={(event) => updateSearchQuery(event.target.value)}/>
                <img className="close-icon" src="/close.svg" alt="close"
                     onClick={() => {
                         updateSearchQuery("");
                         updateSearchActive(false);
                     }}/>
            </div>

        </div>
    );
}
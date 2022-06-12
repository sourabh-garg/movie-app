import {useRef, useState} from "react";
import {isMobile} from 'react-device-detect';

export default function Index(props) {
    const [searchActive, updateSearchActive] = useState(false);
    const {updateSearchQuery, value, updateSidebarState} = props;


    return (
        <div className="header">

            {isMobile &&   <img className="hamburger" src="/hamburger.svg" alt="menu" onClick={() => {updateSidebarState(true)}} /> }
            
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

            <div className="settings">
                <img src="/light-mode.svg" alt="mode"/>
                <img src="/three-dot.svg" alt="extra"/>
            </div>

        </div>
    );
}
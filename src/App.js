import MovieList from "./MovieList";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import {useState} from "react";
import {isMobile} from 'react-device-detect';

export default function App() {
    const [searchQuery, updateSearchQuery] = useState("");
    const [sidebarActive, updateSidebarState] = useState(!isMobile);

  return (
    <div className="App">
        <div className="layout">
            <Sidebar active={sidebarActive} updateSidebarState={updateSidebarState}/>
            <div className="content">
                <Header value={searchQuery} updateSearchQuery={updateSearchQuery} updateSidebarState={updateSidebarState}/>
                <MovieList searchQuery={searchQuery}/>
            </div>
        </div>
    </div>
  );
}

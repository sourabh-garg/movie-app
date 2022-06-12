import MovieList from "./MovieList";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import {useState} from "react";
export default function App() {
    const [searchQuery, updateSearchQuery] = useState("");

  return (
    <div className="App">

        <div className="layout">
            <Sidebar />
            <div className="content">
                <Header value={searchQuery} updateSearchQuery={updateSearchQuery}/>
                <MovieList searchQuery={searchQuery}/>
            </div>
        </div>
    </div>
  );
}

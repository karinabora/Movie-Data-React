
"use client"
import Header from "./header.js";
import MovieList from "./data.js";
import Add_Movie from "./Add_movie.js";
import "./globals.css";
const App = () => {
    return (
        <div>
            <Header />
            <MovieList />
            <Add_Movie/>
        </div>
    );

};


export default App;

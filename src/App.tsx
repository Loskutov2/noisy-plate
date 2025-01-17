import React from "react";
import { Route, Routes } from "react-router-dom";
import { SearchForm } from "./Components/SearchForm/SearchForm.tsx";
import { HomePage } from "./Pages/HomePage/HomePage.tsx";
import { SearchPage } from "./Pages/SearchPage/SearchPage.tsx";
import { TrackPage } from "./Pages/TrackPage/TrackPage.tsx";
import { AlbumPage } from "./Pages/AlbumPage/AlbumPage.tsx";

const App: React.FC = () => {
  return (
    <div>
      <SearchForm/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/search" element={<SearchPage/>}/>
        <Route path="track/:id" element={<TrackPage/>}/>
        <Route path="album/:id" element={<AlbumPage/>}/>
      </Routes>
    </div>
  );
}

export default App;

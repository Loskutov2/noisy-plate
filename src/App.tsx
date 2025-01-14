import React from "react";
import { Route, Routes } from "react-router-dom";
import { SearchForm } from "./Components/SearchForm/SearchForm.tsx";
import { HomePage } from "./Pages/HomePage/HomePage.tsx";
import { SearchPage } from "./Pages/SearchPage/SearchPage.tsx";

const App: React.FC = () => {
  return (
    <>
      <SearchForm/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/search" element={<SearchPage/>}/>
      </Routes>
    </>
  );
}

export default App;

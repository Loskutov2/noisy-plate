import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SearchForm } from "./Components/SearchForm/SearchForm.tsx";
import { HomePage } from "./Pages/HomePage/HomePage.tsx";
import { SearchPage } from "./Pages/SearchPage/SearchPage.tsx";

const App: React.FC = () => {
  return (
    <BrowserRouter basename='/noisy-plate'>
      <SearchForm/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/search" element={<SearchPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

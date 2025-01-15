import React from "react";
import { Route, Routes } from "react-router-dom";
import { SearchForm } from "./Components/SearchForm/SearchForm.tsx";
import { HomePage } from "./Pages/HomePage/HomePage.tsx";
import { SearchPage } from "./Pages/SearchPage/SearchPage.tsx";

const App: React.FC = () => {
  // const [theme] = useState(localStorage.getItem('theme')||"light");
  // theme||localStorage.setItem('theme','light');
  // const lRef = React.useRef<HTMLLinkElement|null>(null);
  // useEffect(() => {
  //   lRef.current||=document.head.appendChild(Object.assign(document.createElement('link'),{rel:'stylesheet' }));
  //   lRef.current.href=`./themes/${theme}.css`;
  // }, [theme]);
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

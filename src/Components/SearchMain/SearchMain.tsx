import React from "react";
import { useSelector } from "react-redux";
import { selectSearched } from "../../redux/selectors.ts";
import { SearchResults } from "./SearchMain.styled.tsx";

export const SearchMain:React.FC = () => {
    const searchRes = useSelector(selectSearched)
    console.log(searchRes)
    return(
        <SearchResults>
            <ul>
                {searchRes.map((item)=>{
                    return(
                        <li key={item.id}>
                            <img src={item.thumbnail} alt="thumbnail"/>
                            <p>{item.title}</p>
                        </li>
                    )
                    })}
            </ul>
        </SearchResults>
    )
};
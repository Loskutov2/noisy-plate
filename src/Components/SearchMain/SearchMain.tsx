import React from "react";
import { useSelector } from "react-redux";
import { selectSearched } from "../../redux/selectors.ts";
import { SearchResults } from "./SearchMain.styled.tsx";

export const SearchMain:React.FC = () => {
    return(
        <SearchResults>
            <ul>
                {useSelector(selectSearched).map((item)=>{
                    return(
                        <li key={item.id}>
                            <p>{item.title}</p>
                            <img src={item.thumbnail} alt="thumbnail"/>
                        </li>
                    )
                    })}
            </ul>
        </SearchResults>
    )
};
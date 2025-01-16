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
                        <>
                        <svg width="100%" height="3"><line x1="0" y1="1" x2="100%" y2="3"/></svg>
                        <li key={item.id}>
                            <img src={item.thumbnail} alt="thumbnail"/>
                            <p>{item.title}</p>
                        </li>
                        </>
                    )
                    })}
            </ul>
        </SearchResults>
    )
};
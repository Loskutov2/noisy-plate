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
                            <div>
                                <span>{item.title}</span>
                            </div>
                            <svg height='60' width='100' xmlns="http://www.w3.org/2000/svg">
                                <line x1="0" y1="3" x2="100" y2="3" color="currentColor"/>
                            </svg>
                        </li>
                    )
                    })}
            </ul>
        </SearchResults>
    )
};
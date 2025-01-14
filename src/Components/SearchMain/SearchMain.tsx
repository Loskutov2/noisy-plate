import React from "react";
import { useSelector } from "react-redux";
import { selectSearched } from "../../redux/selectors.ts";

export const SearchMain:React.FC = () => {
    console.log(useSelector(selectSearched))
    return(
        <main>
            <ul>
                hi
            </ul>
        </main>
    )
};
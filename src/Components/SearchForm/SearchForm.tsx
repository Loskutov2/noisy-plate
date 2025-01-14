import React, { useState } from "react";
import { Search } from "./SearchForm.styled.tsx";
import { useDispatch } from "react-redux";
import { searchByQuery} from "../../redux/searchSlice.ts";

export const SearchForm:React.FC = () => {
    const dispatch = useDispatch();
    const [query, setQuery] = useState('');

    const handleSubmit:()=>void = () => {
        console.log("Hi")
    }

    const handleChange= (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setQuery(e.target.value);
        dispatch(searchByQuery(e.target.value) as any);
    }
    return(
        <header>
            <Search onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={query}/>
                <button type="submit"></button>
            </Search>
        </header>
    );
}
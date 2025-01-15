import React, { useState } from "react";
import { Search } from "./SearchForm.styled.tsx";
import { useDispatch } from "react-redux";
import { searchByQuery} from "../../redux/searchSlice.ts";
import { useNavigate } from 'react-router-dom';

export const SearchForm:React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [query, setQuery] = useState('');

    const handleChange= (e: React.ChangeEvent<HTMLInputElement>) => {
        const q = e.target.value;
        setQuery(q);
        dispatch(searchByQuery({ q, albumToggle: false }) as any);
        navigate(`/${q&&"search"}`);
    }

    const handleClear = () => {
        setQuery('');
        navigate('/');
    }
    return(
            <Search onSubmit={handleClear}>
                <input type="text" placeholder="Search" onChange={handleChange} value={query}/>
                {query&&<button type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                        <line x1="30" y1="30" x2="70" y2="70" strokeWidth="8" stroke="currentColor" strokeLinecap="round"/>
                        <line x1="30" y1="70" x2="70" y2="30" strokeWidth="8" stroke="currentColor" strokeLinecap="round"/>
                    </svg>
                </button>}
            </Search>
    );
}
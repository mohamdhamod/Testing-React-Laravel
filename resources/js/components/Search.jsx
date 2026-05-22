import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();

        if (!search) {
            return alert("Enter something first!")
        }
        if (search.trim()) {
            navigate(`/search/${encodeURIComponent(search)}`);
            setSearch("")
        }
    };

    return (
        <form onSubmit={handleSearch} className='flex h-11 items-center overflow-hidden rounded-full border border-slate-300 bg-white shadow-sm transition focus-within:border-slate-500 focus-within:shadow-md'>
            <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder='Search shoes, brands, styles...'
                className='h-full min-w-[180px] bg-transparent px-4 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none md:min-w-[240px]'
            />
            <button type="submit" className='grid h-full w-11 place-items-center bg-slate-900 transition hover:bg-slate-800'>
                <img src="/Navbar/search.png" alt="Search" className='h-5 w-5 rounded-sm invert' />
            </button>
        </form>
    );
};

export default Search;

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './SearchBar.css';

export interface SearchBarProps {
    initialQuery?: string;
    label?: string;
    placeholder?: string;
}

export const SearchBar = ({ initialQuery, label, placeholder }: SearchBarProps) => {
    const [search, setSearch] = useState(initialQuery ?? '');
    const navigate = useNavigate();

    const handleSubmit = (event: any) => {
        if (!!search) {
            navigate(`/search?query=${search}`, { replace: true });
        }
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit} className='search-bar'>
            <label>
                {label && <span className='search-bar__label'>{label}</span>}
                <input
                    type='text'
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    className='search-bar__input'
                    placeholder={placeholder}
                />
            </label>
            <button type='submit' title='Search' className='search-bar__submit'>
                <i className='fa-solid fa-magnifying-glass search-bar__submit__icon' />
            </button>
        </form>
    );
};

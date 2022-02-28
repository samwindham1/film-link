import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { MovieResult } from 'moviedb-promise/dist/request-types';
import { searchMovie } from '@api';
import { MovieCard } from '@components';

import './search.css';

const SearchBar = ({ query }: { query: string }) => {
    const [search, setSearch] = useState(query ?? '');
    const navigate = useNavigate();

    const handleSubmit = (event: any) => {
        if (!!search) {
            navigate(`?query=${search}`);
        }
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Movie Title:
                <input type='text' value={search} onChange={(event) => setSearch(event.target.value)} />
            </label>
            <input type='submit' value='Submit' />
        </form>
    );
};

export const Search = () => {
    const [results, setResults] = useState<MovieResult[]>();
    const [searchParams] = useSearchParams();
    const query = searchParams.get('query');

    console.log(query);

    useEffect(() => {
        if (!!query) {
            searchMovie(query).then(({ results }) => {
                console.log(results);
                setResults(results);
            });
        }
    }, [query]);

    return (
        <div className='search'>
            <SearchBar query={query} />
            <div className='results'>
                {results && results.map((result: any, index: number) => <MovieCard key={index} movie={result} />)}
            </div>
        </div>
    );
};

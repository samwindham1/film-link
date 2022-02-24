import { useState } from 'react';
import { searchMovie } from '@api';
import { MovieCard } from '@components';

import { MovieResult } from 'moviedb-promise/dist/request-types';

export const Search = () => {
    const [results, setResults] = useState<MovieResult[]>();
    const [search, setSearch] = useState('');

    const handleSubmit = (event: any) => {
        if (!!search) {
            searchMovie(search).then(({ results }) => {
                console.log(results);
                setResults(results);
            });
        }
        event.preventDefault();
    };

    return (
        <div className='search'>
            <form onSubmit={handleSubmit}>
                <label>
                    Movie Title:
                    <input type='text' value={search} onChange={(event) => setSearch(event.target.value)} />
                </label>
                <input type='submit' value='Submit' />
            </form>
            <div
                className='results'
                style={{ padding: '8px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}
            >
                {results && results.map((result: any, index: number) => <MovieCard key={index} movie={result} />)}
            </div>
        </div>
    );
};

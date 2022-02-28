import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MovieResult } from 'moviedb-promise/dist/request-types';
import { searchMovie } from '@api';
import { MovieCard } from '@components';

import './search.css';

export const Search = () => {
    const [results, setResults] = useState<MovieResult[]>();
    const [searchParams] = useSearchParams();
    const query = searchParams.get('query') ?? '';

    useEffect(() => {
        if (!!query) {
            searchMovie(query).then(({ results }) => {
                setResults(results);
            });
        }
    }, [query]);

    return (
        <div className='search'>
            <div className='results'>
                {results && results.map((result: any, index: number) => <MovieCard key={index} movie={result} />)}
            </div>
        </div>
    );
};

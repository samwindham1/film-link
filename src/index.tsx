import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { App } from './app';
import { Home, Movie, Search } from '@routes';

import './index.css';
import './normalize.css';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />}>
                    <Route path='/' element={<Home />} />
                    <Route path='search' element={<Search />} />
                    <Route path='search?query=:query' element={<Search />} />
                    <Route path='movie' element={<Navigate replace to='/search' />} />
                    <Route path='movie/:movieId' element={<Movie />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

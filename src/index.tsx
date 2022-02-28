import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { App } from './app';
import { Movie, Search } from '@routes';
import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/search' element={<Search />} />
                <Route path='/search?query=:query' element={<Search />} />
                <Route path='/movie' element={<Navigate replace to='/search' />} />
                <Route path='/movie/:movieId' element={<Movie />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

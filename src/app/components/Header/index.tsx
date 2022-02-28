import { SearchBar } from '@components';
import { Link } from 'react-router-dom';

import './Header.css';

export const Header = () => (
    <div className='header'>
        <Link to='/' className='header__title__link'>
            <h1 className='header__title'>Film Link</h1>
        </Link>
        <SearchBar />
    </div>
);

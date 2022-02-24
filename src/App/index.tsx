import { Link } from 'react-router-dom';

export const App = () => {
    return (
        <div className='App'>
            <h1>Film Link</h1>
            <nav>
                <Link to='/search'>Search</Link>
            </nav>
        </div>
    );
};

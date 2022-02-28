import { Outlet } from 'react-router-dom';
import { Header } from '@components';

export const App = () => {
    return (
        <div className='App'>
            <Header />
            <Outlet />
        </div>
    );
};

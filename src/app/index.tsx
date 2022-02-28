import { Outlet } from 'react-router-dom';
import { Header } from '@components';

export const App = () => (
    <div className='App'>
        <Header />
        <Outlet />
    </div>
);

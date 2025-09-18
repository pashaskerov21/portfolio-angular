import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Page404 } from './pages/page404/page404';

export const routes: Routes = [
    {
        path: '',
        component: Home,
    },
    {
        path: '404',
        component: Page404,
    }
];

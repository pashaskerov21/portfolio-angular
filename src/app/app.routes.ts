import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Page404 } from './pages/page404/page404';
import { ProjectsPage } from './pages/projects-page/projects-page';

export const routes: Routes = [
    {
        path: '',
        component: Home,
    },
    {
        path: 'projects',
        component: ProjectsPage,
    },
    {
        path: '404',
        component: Page404,
    }
];

import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Page404 } from './pages/page404/page404';
import { ProjectsPage } from './pages/projects-page/projects-page';
import { resolverData } from './pages/data.resolver';

export const routes: Routes = [
    {
        path: '',
        component: Home,
        resolve: { data: resolverData }
    },
    {
        path: 'projects',
        component: ProjectsPage,
        resolve: { data: resolverData },
    },
    {
        path: '404',
        component: Page404,
    },
    {
        path: '**',
        redirectTo: '404',
        pathMatch: 'full'
    }
];

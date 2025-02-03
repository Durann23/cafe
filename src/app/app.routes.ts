import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', title: 'Home', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent), children: [
            { path: '', loadComponent: () => import('./principal/principal.component').then(m => m.PrincipalComponent) },
            { path: 'contacto', loadComponent: () => import('./contacto/contacto.component').then(m => m.ContactoComponent) },
            { path: 'nosotros', loadComponent: () => import('./nosotros/nosotros.component').then(m => m.NosotrosComponent) },
            { path: 'catalogo', loadComponent: () => import('./catalogo/catalogo.component').then(m => m.CatalogoComponent) },
        ]
    }
];

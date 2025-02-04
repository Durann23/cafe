import { Routes } from '@angular/router';
import { title } from 'node:process';

export const routes: Routes = [
    {
        path: '', title: 'Como dice el dicho', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent), children: [
            { path: '', loadComponent: () => import('./principal/principal.component').then(m => m.PrincipalComponent) },
            { path: 'contacto', data:{title:'Contacto', description:'wuu'},  loadComponent: () => import('./contacto/contacto.component').then(m => m.ContactoComponent) },
            { path: 'nosotros', loadComponent: () => import('./nosotros/nosotros.component').then(m => m.NosotrosComponent) },
            { path: 'catalogo', loadComponent: () => import('./catalogo/catalogo.component').then(m => m.CatalogoComponent) },
        ]
    }
];

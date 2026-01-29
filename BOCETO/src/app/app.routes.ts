import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'inicio', // <--- AQUÍ CAMBIAMOS para que vaya a Inicio
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    loadComponent: () => import('./pages/inicio/inicio.page').then( m => m.InicioPage)
  },
  {
    path: 'registro',
    loadComponent: () => import('./pages/registro/registro.page').then( m => m.RegistroPage)
  },
  {
    path: 'servicios',
    loadComponent: () => import('./pages/servicios/servicios.page').then( m => m.ServiciosPage)
  },
  {
    path: 'ubicacion',
    loadComponent: () => import('./pages/ubicacion/ubicacion.page').then( m => m.UbicacionPage)
  },
  {
    path: 'contactos',
    loadComponent: () => import('./pages/contactos/contactos.page').then( m => m.ContactosPage)
  },
  {
    path: 'registro-usuario',
    loadComponent: () => import('./pages/registro-usuario/registro-usuario.page').then( m => m.RegistroUsuarioPage)
  },
];
import { Routes } from '@angular/router';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { AltaChoferComponent } from './componentes/alta-chofer/alta-chofer.component';
import { AuthGuard } from '@angular/fire/auth-guard';
import { VehiculoComponent } from './componentes/vehiculo/vehiculo/vehiculo.component';
import { adminGuard } from './guard/admin.guard';
import { terminoGuard } from './guard/termino.guard';

export const routes: Routes = [
    { path: 'bienvenida', component: BienvenidaComponent },
    { path: '',redirectTo:'/bienvenida',pathMatch: "full"}, 
    { path: 'login', 
        loadComponent: () => import('./componentes/login/login.component').then(m => m.LoginComponent)},
    { path: 'registro', 
        loadComponent: () => import('./componentes/registro/registro.component').then(m => m.RegistroComponent)
    },
    { path: 'altaChofer', component: AltaChoferComponent},
    {  path: "detalleChofer", 
        loadComponent: () => import('./componentes/chofer/detalle-chofer/detalle-chofer.component').then(m => m.DetalleChoferComponent),
        canActivate:[AuthGuard]
    },
    {path: 'vehiculo', component: VehiculoComponent,
        canActivate:[adminGuard]
    },
    {path: 'terminos', 
        loadComponent: () => import('./componentes/terminos/terminos.component').then(m => m.TerminosComponent),
        canDeactivate:[terminoGuard]
    },
];

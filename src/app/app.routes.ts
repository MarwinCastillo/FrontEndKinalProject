import{RouterModule, Routes} from '@angular/router';
import{HomeComponent} from './components/home/home.component';
import { ModulosComponent} from './components/modulos/modulos.component';
import { AboutComponent} from './components/about/about.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { LoginComponent} from './components/usuarios/login.component';
import { carrerasComponent } from './components/carreras/carreras.component';
import { AsignacionesAlumnosComponent } from './components/asignaciones-alumnos/asignaciones-alumnos.component';
import { FormAsignacionAlumnoComponent } from './components/asignaciones-alumnos/form-asignacion-alumno.component';


const app_routes: Routes=[
    {path:'home', component:HomeComponent},
    {path: 'carreras', component: carrerasComponent},
    {path: 'asignacionesPorAlumno', component:AsignacionesAlumnosComponent},
    {path: 'asignacionesPorAlumno/form/:uuid', component:FormAsignacionAlumnoComponent},
    {path: 'modulos',component:ModulosComponent},
    {path: 'about', component:AboutComponent},
    {path: 'login', component:LoginComponent},
    {path: 'footer', component:FooterComponent},
    {path:'**', pathMatch: 'full', redirectTo: 'home'}
    
];

export const app_routing=RouterModule.forRoot(app_routes,{useHash:true});
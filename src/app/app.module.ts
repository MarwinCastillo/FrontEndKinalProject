//Componentes Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import{ HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

//Rutas
import { app_routing } from'./app.routes';

//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ModulosComponent } from './components/modulos/modulos.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/usuarios/login.component';
import { AuthService } from './components/usuarios/auth.service';
import { ClasesService } from './components/home/clases.service';
import { AuthInterceptor } from './components/interceptors/auth';
import { TokenInterceptor } from './components/interceptors/token';
import { carrerasComponent } from './components/carreras/carreras.component';
import { AsignacionesAlumnosComponent } from './components/asignaciones-alumnos/asignaciones-alumnos.component';
import { FormAsignacionAlumnoComponent } from './components/asignaciones-alumnos/form-asignacion-alumno.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ModulosComponent,
    AboutComponent,
    LoginComponent,
    carrerasComponent,
    AsignacionesAlumnosComponent,
    FormAsignacionAlumnoComponent
  ],
  imports: [
    BrowserModule,
    app_routing,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ AuthService, ClasesService, 
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

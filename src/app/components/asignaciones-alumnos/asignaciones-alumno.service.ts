import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { AsignacionAlumno } from './asignacion-alumno';
import { CrearAsignacion } from './crear-asignacion';
import { AlumnosService } from '../alumnos/alumnos.service';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AsignacionesAlumnoService {
  //endPoint = 'http://localhost:8088/kalum-notas/v1';
  endPoint = environment.baseUrl

  constructor(private httpClient: HttpClient, private alumnosService: AlumnosService) { }

  getAsignacionesPorAlumno(): Observable<AsignacionAlumno[]> {
    //return this.httpClient.get<AsignacionAlumno[]>(`${this.endPoint}/asignaciones`);
    return this.alumnosService.getAsignacionesPorAlumno();
  }

  create(payload: CrearAsignacion): Observable<AsignacionAlumno> {
    return this.httpClient.post<AsignacionAlumno>(`${this.endPoint}/asignaciones`, payload);
  }

  delete(uuid:string) : Observable<CrearAsignacion>{
    return this.httpClient.delete<CrearAsignacion>(`${this.endPoint}/asignaciones/${uuid}`)
      .pipe(catchError( e=> {
        if(e){
          console.log(e);
        }
        return throwError(e);
      }))
  }



}

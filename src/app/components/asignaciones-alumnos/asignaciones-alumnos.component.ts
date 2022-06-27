//import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AsignacionAlumno } from './asignacion-alumno';
import { AsignacionesAlumnoService } from './asignaciones-alumno.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-asignaciones-alumnos',
  templateUrl: './asignaciones-alumnos.component.html',
  styles: [
  ]
})
export class AsignacionesAlumnosComponent implements OnInit {
  asignacionesPorAlumno: any[] = [];

  constructor(private asignacionesAlumnoService: AsignacionesAlumnoService) { }

  ngOnInit(): void {
    this.asignacionesAlumnoService.getAsignacionesPorAlumno().subscribe((response) => {
      this.asignacionesPorAlumno = response;
    });
  }

  eliminar(asignacionAlumno: AsignacionAlumno): void {
    Swal.fire({
      title: 'Eliminar Asignacion',
      text: "Está seguro de eliminar el registro?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, elimninar el restro !'
    }).then((resultado) => {
      if (resultado.isConfirmed) {
        this.asignacionesAlumnoService.delete(asignacionAlumno.asignacionId).subscribe(() => {
          this.asignacionesPorAlumno = this.asignacionesPorAlumno.filter(asig => asig != asignacionAlumno)
        });
      }
    })
  }
}
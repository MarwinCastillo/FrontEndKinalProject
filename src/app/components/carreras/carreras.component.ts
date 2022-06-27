import { Component, OnInit } from '@angular/core';
import { CarreraTecnica } from './carrera-tecnica';
import { CarrerasTecnicasService } from './carreras.service';

@Component({
  selector: 'app-carreras',
  templateUrl: './carreras.component.html'
  
})
export class carrerasComponent implements OnInit {

  carreraTecnica: CarreraTecnica;
  carrerasTecnicas: any[] = [];

  constructor(private carreraService: CarrerasTecnicasService) { }

  ngOnInit(): void {
    this.carreraService.getCarrerasTecnicas().subscribe(response => { 
      this.carrerasTecnicas = response;
    })
  }
}

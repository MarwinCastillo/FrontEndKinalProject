import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
  
})
export class FooterComponent implements OnInit {

  compania: string;
  anio: number;

  constructor() {
    this.compania = "Kalum V1.0"
    this.anio = new Date().getFullYear();
   }

  ngOnInit(): void {
  }

}

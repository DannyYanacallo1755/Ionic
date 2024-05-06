import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  nombre: string = 'Danny Yanacallo';
  educacion: any[] = [
    { puesto: 'Colegio Técnico "Pedro Echeverría Terán', empresa: 'Bachillerato' },
    { puesto: 'Escuela Politécnica Nacional', empresa: 'Tecnología Superior en Desarrollo de Software' },
  ];
  idiomas: any[] = [
    { idioma: 'Ingles', nivel: 'Intermedio' },
    { idioma: 'Espanol', nivel: 'Nativo' },
  ];


  constructor() {}

}

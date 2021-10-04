import { Component } from '@angular/core';

import { Heroe, Color } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  enMayuscula: boolean = true;
  clase: string = 'p-button-info';

  ordenarPor: string = 'nombre';
  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.rojo
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde
    },
  ];

  heroes1: Heroe[] = this.heroes.slice();

  cambiarBoton() {
    (this.enMayuscula)
      ? (
        this.enMayuscula = false,
        this.clase = 'p-button-danger'
      )
      : (this.enMayuscula = true,
        this.clase = 'p-button-info'
      );
  }

  cambiarOrden(value: string) {
    this.ordenarPor = value;
  }
}

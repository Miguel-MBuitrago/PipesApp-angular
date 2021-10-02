import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  // i18nSelect
  nombre: string = 'Susana';
  genero: string = 'femenino';

  invitationMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  // i18nPlural
  clientes: string[] = ['Juan', 'Jose', 'Lucia', 'Claudia', 'Arturo']
  clientesMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos 1 cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarCliente() {
    if (this.nombre === 'Susana') {
      this.nombre = 'Fernando';
      this.genero = 'masculino'
    } else {
      this.nombre = 'Susana';
      this.genero = 'femenino';
    }
  }

  borrarCliente() {
    this.clientes.pop()
  }


  // KeyValue 
  persona: object = {
    nombre: 'Miguel',
    edad: '21',
    pais: 'España'
  }

  // Json
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    },
  ]

  // Async Pipe
  miObservable = interval(1000);

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de la promesa');
    }, 3500);
  });
}

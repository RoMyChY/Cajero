import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Cajero, CajeroClass } from 'src/app/shared/interfaces/Cajero';
import { User, UserClass } from 'src/app/shared/interfaces/User';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  user: User = new UserClass;
  userSaved: User = new UserClass;
  saldoCajero: Cajero = new CajeroClass;
  bienvenido: boolean;
  salidaSaldo: boolean = false;
  cantidad: number;
  quinientos: number;
  doscientos: number;
  cien: number;
  cincuenta: number;

  constructor() {
    //Para cargar un usuario de prueba en localstorage y cargar cajero
    /*this.user.id = 123;
    this.user.nombre = 'Romina';
    this.user.apellido = 'Urbán';
    this.user.saldo = 5000;
    this.saldoCajero.quinientos = 10;
    this.saldoCajero.doscientos = 15;
    this.saldoCajero.cien = 20;
    this.saldoCajero.cincuenta = 50;
    localStorage.setItem('cajero', JSON.stringify(this.saldoCajero));
    localStorage.setItem('usuario', JSON.stringify(this.user));*/

    this.userSaved = JSON.parse(localStorage.getItem('usuario'));
    this.saldoCajero = JSON.parse(localStorage.getItem('cajero'));
    console.log(this.userSaved);
    console.log(this.saldoCajero);

  }

  ngOnInit() { }

  checkUser() {
    if (this.user.id != this.userSaved.id) {
      this.bienvenido = false;
      alert('Su usuario no es correcto');
    } else {
      this.bienvenido = true;
    }
  }

  retirar() {
    if (this.cantidad > this.userSaved.saldo) {
      alert("Saldo insuficiente");
    } else {
      let conteo = 0;
      
      this.quinientos = Math.floor(this.cantidad / 500);
      if (this.quinientos != 0) {
        if (this.quinientos < this.saldoCajero.quinientos) {
          conteo = this.cantidad - (this.quinientos * 500);
        }
      } else { conteo = this.cantidad; }

      this.doscientos = Math.floor(conteo / 200);
      if (this.doscientos != 0) {
        if (this.doscientos < this.saldoCajero.doscientos) {
          conteo = conteo - (this.doscientos * 200);
      }
      }

      this.cien = Math.floor(conteo / 100);
      if (this.cien != 0) {
        if (this.cien < this.saldoCajero.cien) {
          conteo = conteo - (this.cien * 100);
        }
      }

      this.cincuenta = Math.floor(conteo / 50);
      if (this.cincuenta != 0) {
        if (this.cincuenta < this.saldoCajero.cincuenta) {
          conteo = conteo - (this.cincuenta * 50);
        }
      }

      if (conteo != 0) {
        alert('No se puede realizar esta transacción');
      } else {
        console.log(conteo);
        this.retiro();
      }
    }
  }

  retiro() {
    this.userSaved.saldo = this.userSaved.saldo - this.cantidad;
    
    if (this.quinientos != 0) {
      this.saldoCajero.quinientos = this.saldoCajero.quinientos - this.quinientos;
    } else if(this.doscientos != 0){
      this.saldoCajero.doscientos = this.saldoCajero.doscientos - this.doscientos;
    } else if(this.cien != 0){
      this.saldoCajero.cien = this.saldoCajero.cien - this.cien;
    } else if(this.cincuenta != 0) {
      this.saldoCajero.cincuenta = this.saldoCajero.cincuenta - this.cincuenta;
    } 


    localStorage.setItem('usuario', JSON.stringify(this.userSaved));
    localStorage.setItem('cajero', JSON.stringify(this.saldoCajero));

    this.salidaSaldo = true;
  }

}

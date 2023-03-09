import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
})
export class CalculadoraComponent {

  a:number =0;
  b:number=0;
  suma:number=0;

  sumar(){
    this.suma=this.a+this.b;
  }


}

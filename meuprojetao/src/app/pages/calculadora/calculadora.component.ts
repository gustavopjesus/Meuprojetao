import { Component, input } from '@angular/core';
import { CabechalhoComponent } from '../../components/cabechalho/cabechalho.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-calculadora',
  imports: [CommonModule, FormsModule, CabechalhoComponent], 
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})

export class CalculadoraComponent {
resultadol: number = 0
 numero01: number = 0
 numero02: number = 0

somal(){
  this.resultadol = this.numero01 + this.numero02
}

subtl(){
  this.resultadol = this.numero01 + this.numero02
}

multi(){
  this.resultadol = this.numero01 + this.numero02
}

divil(){
  this.resultadol = this.numero01 + this.numero02
}

}

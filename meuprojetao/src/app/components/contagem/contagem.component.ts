import { Component } from '@angular/core';

@Component({
  selector: 'app-contagem',
  imports: [],
  templateUrl: './contagem.component.html',
  styleUrl: './contagem.component.css'
})
export class ContagemComponent {


  numero: number = 0

  soma(){
    this.numero = this.numero + 1
  }

  subt(){
    this.numero = this.numero - 1
  }


}

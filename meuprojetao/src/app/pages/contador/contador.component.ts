import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CabechalhoComponent } from '../../components/cabechalho/cabechalho.component';
import { ContagemComponent } from '../../components/contagem/contagem.component';

@Component({
  selector: 'app-contador',
  imports: [ CabechalhoComponent, ContagemComponent],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent {

}

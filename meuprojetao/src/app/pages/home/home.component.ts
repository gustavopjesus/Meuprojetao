import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CabechalhoComponent } from '../../components/cabechalho/cabechalho.component';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CabechalhoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

import { Component } from '@angular/core';
import { FormularioComponent } from "../../components/formulario/formulario.component";
import { GaleriaComponent } from "../../components/galeria/galeria.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormularioComponent, GaleriaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

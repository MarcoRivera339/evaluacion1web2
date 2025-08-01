import { Component } from '@angular/core';
import { TareasService } from '../../services/tareas.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  constructor(private servicioTareas: TareasService){}

  nombre:string='';
  fecha:string='';
  descripcion:string='';

  guardarTarea(formulario:any){
    this.servicioTareas.postTareas(formulario.value).subscribe(()=>{
      window.location.reload();
    })

  }

}

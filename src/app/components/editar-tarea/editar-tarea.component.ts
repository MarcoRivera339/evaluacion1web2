import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TareasService } from '../../services/tareas.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-tarea',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editar-tarea.component.html',
  styleUrl: './editar-tarea.component.css'
})
export class EditarTareaComponent {

   constructor(private tareasServicio: TareasService,
    private router: Router,
    private ruta: ActivatedRoute) { }

    id:string='';
    tarea:any={nombre:'', fecha:'',descripcion:''}

    ngOnInit():void{
      this.ruta.params.subscribe(params=>{
        this.id=params["id"];
        this.tareasServicio.getTareaById(this.id).subscribe(tarea=>{
          this.tarea=tarea;
        } )
      })
    }

    editarTarea(formulario:any):void{
      const tareaActualizada={...formulario.value, id: this.id};
      this.tareasServicio.putTarea(this.id,tareaActualizada).subscribe(()=>{
        this.router.navigate(['tareas'])
      })
    }

}

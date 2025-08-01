import { Component } from '@angular/core';
import { TareasService } from '../../services/tareas.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {

  constructor(private servicioTareas: TareasService,
    private router: Router,
    private ruta: ActivatedRoute) { }

  tareas: any[] = [];

  ngOnInit() {
    this.servicioTareas.getTareas().subscribe(data => {
      this.tareas = Object.keys(data).map(key => ({
        id: key, ...data[key]
      }));
    });
  }

  eliminarTarea(id: string): void {
    this.servicioTareas.deleteTarea(id).subscribe(() => {
      this.tareas = this.tareas.filter(tarea => tarea.id !== id)
    }, error => {
      console.log('no se puede eliminar la tarea', error)
    })
  }

  detalleTarea(id: string) {
    const ide = this.ruta.snapshot.paramMap.get('id');
    if (ide) {
      this.servicioTareas.getTareaById(ide).subscribe(tarea => {
        this.tareas = tarea;
      });
    }
  }

}
import { Component, OnInit } from '@angular/core';
import { TareasService } from '../../services/tareas.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent implements OnInit {

  tarea: any = { nombre: '', fecha: '', descripcion: '' };

  constructor(
    private servicioTareas: TareasService,
    private ruta: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.ruta.snapshot.paramMap.get('id');
    if (id) {
      this.servicioTareas.getTareaById(id).subscribe((tarea) => {
        this.tarea = tarea;
      });
    }
  }
}

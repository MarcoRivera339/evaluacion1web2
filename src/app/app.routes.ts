import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListaComponent } from './components/lista/lista.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { EditarTareaComponent } from './components/editar-tarea/editar-tarea.component';

export const routes: Routes = [
     {path:'',component:HomeComponent},
     {path:'agregar-tarea',component:FormularioComponent },
     {path:'tareas',component:ListaComponent },
     {path:'tareas/:id',component:DetalleComponent},
     {path:'editar-tarea/:id',component:EditarTareaComponent },
     {path:'detalle/:id',component:DetalleComponent },

];

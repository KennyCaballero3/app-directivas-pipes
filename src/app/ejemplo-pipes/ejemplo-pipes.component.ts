import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo-pipes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ejemplo-pipes.component.html',
  styleUrl: './ejemplo-pipes.component.css'
})
export class EjemploPipesComponent {
  fechaActual = new Date();

  nombres = "kenny caballero"

  monto = 2345.3265

  porcentaje = 0.25

  persona = {nombre: "kenny", apellido: "caballero", rol: "estudiante"}
}

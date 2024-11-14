import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo-directivas',
  standalone: true,
  imports: [],
  templateUrl: './ejemplo-directivas.component.html',
  styleUrl: './ejemplo-directivas.component.css'
})
export class EjemploDirectivasComponent {
  mostrarAlumnos = false;
  mostrarCursos = false;

  verAlumnos(): void {
    this.mostrarAlumnos = true;
  }

  verCursos(): void {
    this.mostrarCursos = true;
  }
}

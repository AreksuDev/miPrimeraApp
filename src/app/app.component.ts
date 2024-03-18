import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmpleadosComponent } from './empleados/empleados.component';
import { EmpleadoComponent } from './empleado/empleado.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmpleadosComponent, EmpleadoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'miPrimeraApp';
  saludo = "Hola usuarios.";
}

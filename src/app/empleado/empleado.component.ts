import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-empleado',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css'
})
export class EmpleadoComponent {
  nombre = "Juan";
  apellido = "Díaz";
  private edad = 20;
  empresa = "Píldoras informáticas";
  habilitarCuadro = false;
  usuarioRegistrado = false;
  textoRegistro = "No hay nadie registrado";

  getEdad(){
    return this.edad;
  }

  getUsuarioRegistrado(){
    this.usuarioRegistrado = false;
  }
  setUsuarioRegistrado(event:Event){
    //alert("El usuario se ha registrado");
    if((<HTMLInputElement>event.target).value == "yes"){
      this.textoRegistro = "El usuario se acaba de registrar";
    } else {
      this.textoRegistro = "No hay nadie registrado";
    }
  }
  asignarEmpresa(value:string){
  }

}

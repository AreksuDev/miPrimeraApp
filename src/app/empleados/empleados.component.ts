import { Component } from "@angular/core";
import { EmpleadoComponent } from "../empleado/empleado.component";

@Component({
    selector: "app-empleados",
    standalone: true,
    imports: [EmpleadoComponent],
    templateUrl: "./empleados.component.html",
    styleUrls: ["./empleados.component.css"]
})
export class EmpleadosComponent {

}

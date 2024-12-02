import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Vehiculo } from '../../../clases/vehiculo';
import { AltaVehiculoComponent } from '../alta-vehiculo/alta-vehiculo.component';
import { ModificacionVehiculoComponent } from '../modificacion-vehiculo/modificacion-vehiculo.component';
import { BajaVehiculoComponent } from '../baja-vehiculo/baja-vehiculo.component';
import { TablaVehiculoComponent } from '../tabla-vehiculo/tabla-vehiculo.component';

@Component({
  selector: 'app-vehiculo',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, TablaVehiculoComponent, AltaVehiculoComponent,
    ModificacionVehiculoComponent, BajaVehiculoComponent],
  templateUrl: './vehiculo.component.html',
  styleUrl: './vehiculo.component.scss'
})
export class VehiculoComponent implements OnInit{
  vehiculoSeleccionado !: Vehiculo;

  constructor() { }

  ngOnInit(): void {
  }

  cargarVehiculo(vehiculo : Vehiculo){
    this.vehiculoSeleccionado = vehiculo;
  }
}

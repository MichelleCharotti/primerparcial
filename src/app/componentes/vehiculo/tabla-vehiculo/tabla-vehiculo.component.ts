import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { VehiculoService } from '../../../servicios/vehiculo.service';
import { Vehiculo } from '../../../clases/vehiculo';

@Component({
  selector: 'app-tabla-vehiculo',
  standalone: true,
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './tabla-vehiculo.component.html',
  styleUrl: './tabla-vehiculo.component.scss'
})
export class TablaVehiculoComponent implements OnInit{
  @Output() eventoVehiculoSeleccionado : EventEmitter<any> = new EventEmitter<any>();

  vehiculos : any;


  constructor(private service : VehiculoService) {
    this.service.obtenerVehiculo().subscribe((vehiculos) => {
      if (vehiculos != null) {
        this.vehiculos = vehiculos;
      }
    });
   }

  ngOnInit(): void {
  }

  seleccionarVehiculoEvento(vehiculo : Vehiculo){
    this.eventoVehiculoSeleccionado.emit(vehiculo);
  }

  
}

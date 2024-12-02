import { Component, OnInit } from '@angular/core';
import { Chofer } from '../../../clases/chofer';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetallePaisComponent } from '../detalle-pais/detalle-pais.component';
import { TablaChoferesComponent } from '../tabla-choferes/tabla-choferes.component';
import { ChoferSeleccionadoComponent } from '../chofer-seleccionado/chofer-seleccionado.component';

@Component({
  selector: 'app-detalle-chofer',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, ReactiveFormsModule, DetallePaisComponent,
    ChoferSeleccionadoComponent, TablaChoferesComponent],
  templateUrl: './detalle-chofer.component.html',
  styleUrl: './detalle-chofer.component.scss'
})
export class DetalleChoferComponent implements OnInit{
  choferSeleccionado !: Chofer;

  constructor() { }

  ngOnInit(): void {
  }

  cargarEventoChoferSeleccionado(chofer : Chofer){
    this.choferSeleccionado = chofer;
  }
}

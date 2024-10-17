import { Component, OnInit } from '@angular/core';
import { Chofer } from '../../clases/chofer';
import { PaisSeleccionadoComponent } from "../pais-seleccionado/pais-seleccionado.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { TablaChoferComponent } from "../tabla-chofer/tabla-chofer.component";
import { ChoferSeleccionadoComponent } from "../chofer-seleccionado/chofer-seleccionado.component";

@Component({
  selector: 'app-detalle-chofer',
  standalone: true,
  imports: [PaisSeleccionadoComponent, RouterOutlet, RouterLink, RouterModule, RouterLinkActive, CommonModule, FormsModule, ReactiveFormsModule, TablaChoferComponent, ChoferSeleccionadoComponent],
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

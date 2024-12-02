import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Chofer } from '../../../clases/chofer';

@Component({
  selector: 'app-chofer-seleccionado',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './chofer-seleccionado.component.html',
  styleUrl: './chofer-seleccionado.component.scss'
})
export class ChoferSeleccionadoComponent  implements OnInit{
  @Input() inputDetalleChofer!: Chofer;

  constructor() { }

  ngOnInit(): void {
  }
}

import { Component, Input } from '@angular/core';
import { Chofer } from '../../clases/chofer';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-pais-seleccionado',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterModule,RouterLinkActive,CommonModule,FormsModule],
  templateUrl: './pais-seleccionado.component.html',
  styleUrl: './pais-seleccionado.component.scss'
})
export class PaisSeleccionadoComponent {
  @Input() inputDetalleChofer!: Chofer;

  constructor() { }

  ngOnInit(): void {
  }
}

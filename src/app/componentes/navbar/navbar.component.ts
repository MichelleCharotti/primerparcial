import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../servicios/usuario.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterModule,RouterLinkActive,CommonModule,FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{
  estaLogueado !: boolean;
  esAdmin !: boolean;

  constructor(public usuarioService: UsuarioService) {
    this.estaLogueado = this.usuarioService.estaLogueado();
    this.esAdmin = this.usuarioService.isAdmin();
  }

  ngOnInit(): void {}

  cerrarSesion() {
    this.usuarioService.cerrarSesion();
  }
}

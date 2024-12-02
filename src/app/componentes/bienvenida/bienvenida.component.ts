import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { UsuarioService } from '../../servicios/usuario.service';
import { GitService } from '../../servicios/git.service';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-bienvenida',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bienvenida.component.html',
  styleUrl: './bienvenida.component.scss'
})
export class BienvenidaComponent implements OnInit{
  data : any = null;

  constructor(private git : GitService) { }

  ngOnInit(): void {
    this.git.obtenerInfoGit().subscribe(ref =>{
      this.data = JSON.parse(JSON.stringify(ref));  
    });
  }

}

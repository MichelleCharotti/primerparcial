import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { UsuarioService } from '../../servicios/usuario.service';
import { GitService } from '../../servicios/git.service';

@Component({
  selector: 'app-bienvenida',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './bienvenida.component.html',
  styleUrl: './bienvenida.component.scss'
})
export class BienvenidaComponent implements OnInit{
  data : any;

  constructor(private git : GitService) { }

  ngOnInit(): void {
    this.git.obtenerInfoGit().subscribe(ref =>{
      this.data = JSON.parse(JSON.stringify(ref));  
    });
  }

}

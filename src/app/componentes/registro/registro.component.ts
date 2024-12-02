import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsuarioService } from '../../servicios/usuario.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [RouterLink,RouterModule,CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.scss'
})
export class RegistroComponent {
  formGroup !: FormGroup;

  constructor(
    private formBuilder : FormBuilder,
    private storage : AngularFireStorage,
    private usuarioService : UsuarioService) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      'email' : ['',[Validators.required,Validators.email]],
      'contraseña' : ['',Validators.required],
      'perfil' : ['',[Validators.required,Validators.nullValidator]]
    });
  }

  registrarse(){
    const email = this.formGroup.controls['email'].value;
    const contraseña = this.formGroup.controls['contraseña'].value;
    const perfil = this.formGroup.controls['perfil'].value;
    this.usuarioService.registrar(email,contraseña,perfil);    
    
  }
}

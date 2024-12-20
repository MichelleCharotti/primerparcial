import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { UsuarioService } from '../../servicios/usuario.service';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { MostrarPasswordDirective } from '../../directiva/mostrar-password.directive';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,RouterModule,CommonModule,FormsModule,ReactiveFormsModule,MostrarPasswordDirective],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  formGroup !: FormGroup;

  constructor(
     private formBuilder : FormBuilder,
     private authService: AngularFireAuth,
     private router: Router,
     private usuarioService : UsuarioService) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      'email' : ['',[Validators.required,Validators.email]],
      'contraseña' : ['',Validators.required]
    });
  }

  login(){
     const email = this.formGroup.controls['email'].value;
     const contraseña = this.formGroup.controls['contraseña'].value;
     this.authService.signInWithEmailAndPassword(email,contraseña)
     .then(res =>{
      this.usuarioService.conectarUsuario(email,true)
      .then(resp =>{
        this.formGroup.reset();
        this.router.navigate(['']);
        console.log('logeado');
      })
      .catch(error => {
        this.formGroup.reset();
        this.popUpMensaje('Error','Credenciales Invalidas',true);
      });
     })
     .catch(error => {
      this.formGroup.reset();
      this.popUpMensaje('Error','Credenciales Invalidas',true);
    });
  }

  accesoRapidoEmpleado(){
    this.formGroup.controls['email'].setValue("empleado@email.com");
    this.formGroup.controls['contraseña'].setValue("emple1234");
  }
  
  accesoRapidoAdmin(){
    this.formGroup.controls['email'].setValue("admin@email.com");
    this.formGroup.controls['contraseña'].setValue("admin1234");
  }

  popUpMensaje(titulo : string,mensaje : string,error : boolean){
    Swal.fire(
       titulo,
       mensaje,
       error ? 'error' : 'success'
    )
  }
}

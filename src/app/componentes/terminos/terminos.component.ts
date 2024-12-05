import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UsuarioService } from '../../servicios/usuario.service';

@Component({
  selector: 'app-terminos',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './terminos.component.html',
  styleUrl: './terminos.component.scss'
})
export class TerminosComponent {
  formGroup !: FormGroup;

  constructor(
    private formBuilder : FormBuilder,
    private router: Router,
    private usuarioService : UsuarioService) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      'edad' : ['',[Validators.required,Validators.min(18),Validators.max(65)]],
      'terminos' : ['',[Validators.required]],
    });
  }

  async continuar() {

    const edad = this.formGroup.controls['edad'].value;
    const terminos = this.formGroup.controls['terminos'].value;

   

    const emailLogueado=this.usuarioService.obtenerEmailUsuarioLogueado();


    if(terminos && edad !=undefined)
      {
      this.usuarioService.conectarUsuarioTerminos(emailLogueado,terminos)
      .then(resp =>{
        this.formGroup.reset();
        this.router.navigate(['']);
        console.log('aceptado terminos');
      })
      .catch(error => {
        this.formGroup.reset();
        this.usuarioService.popUpMensaje('Error','Mail Invalido',true);
      });
    }
    else{
      this.usuarioService.popUpMensaje('Error','Debe aceptar terminos y la edad entre 18 y 65',true);
      console.log('incorrecto');
    }
}

}

import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Usuario } from '../clases/usuario';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  dbPath : string = "/usuarios";
  private usuariosColeccion !: AngularFirestoreCollection<Usuario>;
  usuarios : Observable<Usuario[]>;
  usuario !: Observable<Usuario>;
 loguedado !: boolean;

 constructor(private angularF: AngularFirestore,private db : AngularFirestore, private router : Router,
  private authService: AngularFireAuth) { 
  this.usuariosColeccion = this.db.collection<Usuario>(this.dbPath);
  this.usuarios = this.usuariosColeccion.valueChanges(this.dbPath);
  this.estaLogueado();
}

obtenerEmailUsuarioLogueado():string{
  let obj = JSON.parse(localStorage.getItem('user')!);
  return obj.email;
}

isAdmin(){
  let aux : boolean = false;
  let obj = JSON.parse(localStorage.getItem('user')!);
  if(obj != null){
      obj.perfil === 'admin' ? aux=true : aux;
  }
  return aux;
}

estaLogueado(){
  let obj = JSON.parse(localStorage.getItem('user')!);

  if(obj != null){
    obj  != null ? this.loguedado=true : this.loguedado;
  }
return this.loguedado;

}



obtenerUsuarioPorEmail(email:string) {
  return new Promise<any>((resolve)=> {
  this.db.collection(this.dbPath, ref => ref.where('email','==', email)).valueChanges().subscribe(users => resolve(users))})
}

async conectarUsuario(email:string,login:boolean, perfil ?: string){
  await this.obtenerUsuarioPorEmail(email)
   .then(res =>{
    if(login){
      let user : Usuario = new Usuario(res[0].id,res[0].email,res[0].perfil);
      localStorage.setItem('user',JSON.stringify(user));
      this.angularF.collection(this.dbPath).doc(res[0].id).update(user.toJson());
    }else{
      let id = this.angularF.createId();
      let user : Usuario = new Usuario(id,email,perfil);
      localStorage.setItem('user',JSON.stringify(user));
      this.angularF.collection(this.dbPath).doc(id).set(user.toJson());
      this.router.navigate(['']);
      console.log('Registrado');
    }
  })
  .catch(error => console.log(error));
}

registrar(email:string,contraseña:string, perfil ?: string){
  this.authService.createUserWithEmailAndPassword(email,contraseña)
  .then(res =>{
    this.conectarUsuario(email,false,perfil);
  })
  .catch(error => this.popUpMensaje('Error',error.message,true));
}

cerrarSesion() {
  this.authService.signOut();
  localStorage.clear();
  this.loguedado=false;
}

popUpMensaje(titulo : string,mensaje : string,error : boolean){
  Swal.fire(
     titulo,
     mensaje,
     error ? 'error' : 'success'
  )
}

}

import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Chofer } from '../clases/chofer';
import { Observable } from 'rxjs';
import { Pais } from '../clases/pais';

@Injectable({
  providedIn: 'root'
})
export class ChoferService {
  dbPath : string = "/chofer";
  private choferColeccion !: AngularFirestoreCollection<Chofer>;
  choferes : Observable<Chofer[]>;
  chofer !: Observable<Chofer>;

  constructor(private angularF: AngularFirestore) { 
    this.choferColeccion = this.angularF.collection<Chofer>(this.dbPath);
    this.choferes = this.choferColeccion.valueChanges(this.dbPath);
  }
 

  guardarChofer(nombre:string,dni:number,edad:number,nroLicencia:number,licenciaProfesional:boolean,pais : Pais){
    const id = this.angularF.createId();
    let chofer = new Chofer(id,nombre,dni,edad,nroLicencia,licenciaProfesional,pais);
    this.angularF.collection(this.dbPath).doc(id).set(chofer.toJson());
  }

  obtenerChofer(){
    let aux : Array<Chofer> = [];
    this.choferes.forEach(element => {
      element.forEach(res => {
              aux.push(res);
      });
    });
    return aux;
  }
}

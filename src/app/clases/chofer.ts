import { Pais } from "./pais";

export class Chofer {
    id !: string;
    dni!: number;
    edad!: number;
    nombre!: string;
    nroLicencia!: number; 
    pais !: Pais;
    licenciaProfecional !: boolean;

    constructor(id :string,dni : number,edad : number, nombre : string,nroLicencia:number,pais:Pais,licenciaProfecional:boolean){
        this.id = id;
        this.dni = dni;
        this.edad = edad;
        this.nombre = nombre;
        this.nroLicencia = nroLicencia;
        this.pais = pais;
        this.licenciaProfecional = licenciaProfecional
    }


    toJson():any{
        const json ={
            id : this.id,
            dni : this.dni,
            edad : this.edad,
            nombre : this.nombre,
            nroLicencia : this.nroLicencia,
            pais : this.pais.toJson(),
            licenciaProfecional : this.licenciaProfecional
        }
        return json;
    }
}

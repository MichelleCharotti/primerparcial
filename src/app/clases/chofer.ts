import { Pais } from "./pais";

export class Chofer {
    id !: string;
    nombre!: string;
    dni!: number;
    edad!: number;
    nroLicencia!: number; 
    licenciaProfesional !: boolean;
    pais !: Pais;
    

    constructor(id :string, nombre : string, dni : number,edad : number, nroLicencia:number,licenciaProfesional:boolean,pais:Pais){
        this.id = id;
        this.nombre = nombre;
        this.dni = dni;
        this.edad = edad;
        this.nroLicencia = nroLicencia;
        this.licenciaProfesional = licenciaProfesional;
        this.pais = pais;
    }


    toJson():any{
        const json ={
            id : this.id,
            nombre : this.nombre,
            dni : this.dni,
            edad : this.edad,
            nroLicencia : this.nroLicencia,
            licenciaProfesional : this.licenciaProfesional,
            pais : this.pais.toJson(),
        }
        return json;
    }
}

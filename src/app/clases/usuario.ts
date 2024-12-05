export class Usuario {
    id !: string;
    email !: string;
    perfil ?: string;
    terminos ?: boolean;

    constructor(id : string, email : string, perfil ?: string, terminos ?: boolean){
        this.id = id;
        this.email = email;
        this.perfil = perfil;
        this.terminos = terminos;
    }

    toJson():any{
        const json ={
            id : this.id,
            email : this.email,
            perfil : this.perfil,
            terminos : this.terminos
        }
        return json;
    }

    public getID():string{
        return this.id;
    }

    public getEmail():string{
        return this.email;
    }
}

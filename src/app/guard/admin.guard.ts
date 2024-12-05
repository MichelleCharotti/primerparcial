import { CanActivateFn, Router } from '@angular/router';
import { UsuarioService } from '../servicios/usuario.service';
import { inject } from '@angular/core';

export const adminGuard: CanActivateFn = (route, state) => {
  const usuario=inject(UsuarioService);
  const router=inject(Router);

  if(usuario == undefined){
    return router.parseUrl("/bienvenida");
  }
  if(usuario.isAdmin()){
    return true;
  }
  return router.parseUrl("/bienvenida");
};

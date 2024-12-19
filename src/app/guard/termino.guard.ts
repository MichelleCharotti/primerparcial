import { CanDeactivateFn, Router } from '@angular/router';
import { UsuarioService } from '../servicios/usuario.service';
import { inject } from '@angular/core';
import { TerminosComponent } from '../componentes/terminos/terminos.component';

export const terminoGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  const usuario=inject(UsuarioService);
  const router=inject(Router);
  
  if( usuario.obtenerUsuarioTermino() == true )
{
  router.navigate(['/bienvenida']);
  return false;
}

  return true;
};

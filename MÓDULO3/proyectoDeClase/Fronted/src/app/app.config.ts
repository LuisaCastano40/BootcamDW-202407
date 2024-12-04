// Nos permite agregar configuraciones necesarias para el funcionamiento
// de nuestro proyecto
// Varias dependencias requieren que se configure su proveedor, para
// poder usarse

import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
// Necesito conectarme con un backend -> nos lo permite el clienteHTTP
import { provideHttpClient } from '@angular/common/http';
// Importar la dependencia para gestionar mensajes de respuesta
import { provideToastr } from 'ngx-toastr';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    // Proveedores que permiten funcionamientos
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    // este proveedor es el que permite que hagamos peticiones al back
    provideHttpClient(),
    // este proveedor es para mensajes de respuesta
    provideToastr({
      timeOut: 2000, //tiempo de duración en pantalla
      positionClass: 'toast-bottom-left', //definir donde queremos que se muestre
      preventDuplicates: true, //evitar duplicados
      easeTime: 0, //cuánto tiempo pasa antes de que aparezca en pantalla
      progressBar: true //si queremos o no la barra de progreso
    })
  ]
};

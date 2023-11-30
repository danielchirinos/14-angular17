import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(
            routes, 
            withViewTransitions({
                skipInitialTransition:true, //para salta la primera transicion
                onViewTransitionCreated( transitionInfo ){ //para ver detalle de la transicion, de donde viene, a donde va, si se esta ejecutando etc.
                    // console.log({transitionInfo});
                }
                
            })
        ),
        provideHttpClient(),

        // otra manera de importar mas modulos en config
        // importProvidersFrom(
        //     HttpClientModule
        // )
        
    ]
};

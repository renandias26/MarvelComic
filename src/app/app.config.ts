import { APP_INITIALIZER, ApplicationConfig, importProvidersFrom, inject } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { ConfigService } from './services/config.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), 
    provideClientHydration(), 
    importProvidersFrom(HttpClientModule), 
    {provide: APP_INITIALIZER, useFactory: resolveEnviroment, multi: true}
    
  ]

  
};

export function resolveEnviroment() {
  const httpService: ConfigService = inject(ConfigService);
  return () => new Promise((resolve) => {
    const environment = require('../assets/config.json');
    httpService.baseUrl = environment.baseUrl;
    resolve(true)

    });
  }

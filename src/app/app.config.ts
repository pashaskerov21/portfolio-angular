import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling, withRouterConfig } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes, withInMemoryScrolling({
        scrollPositionRestoration: 'enabled', // hər route dəyişəndə yuxarıdan başladır
        anchorScrolling: 'enabled'           // #id scroll dəstəkləyir
      })),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch())
  ]
};

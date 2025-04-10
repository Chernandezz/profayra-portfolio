import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import {
  APP_INITIALIZER,
  PLATFORM_ID,
  makeEnvironmentProviders,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { translateServerLoaderFactory } from './translate-server.loader';
import { firstValueFrom } from 'rxjs';

// Factory para cargador en navegador
export function httpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

// Factory para seleccionar el cargador apropiado
export function loaderFactory(http: HttpClient, platformId: Object) {
  if (isPlatformBrowser(platformId)) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
  } else {
    return translateServerLoaderFactory();
  }
}

// Función de inicialización
export function initializeTranslations(
  translate: TranslateService,
  platformId: Object
) {
  return () => {
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('es');

    if (isPlatformBrowser(platformId)) {
      const browserLang = translate.getBrowserLang();
      const langToUse = browserLang?.match(/en|es/) ? browserLang : 'es';
      translate.use(langToUse);
    } else {
      // En el servidor, simplemente usa el idioma predeterminado
      translate.use('es');
    }

    // Usa firstValueFrom en lugar de toPromise
    return firstValueFrom(translate.get('HOME.HERO.TITLE'));
  };
}

export function provideTranslations() {
  return makeEnvironmentProviders([
    TranslateModule.forRoot({
      defaultLanguage: 'es',
      isolate: false,
      loader: {
        provide: TranslateLoader,
        useFactory: loaderFactory,
        deps: [HttpClient, PLATFORM_ID],
      },
    }).providers || [],

    {
      provide: APP_INITIALIZER,
      useFactory: initializeTranslations,
      deps: [TranslateService, PLATFORM_ID],
      multi: true,
    },
  ]);
}

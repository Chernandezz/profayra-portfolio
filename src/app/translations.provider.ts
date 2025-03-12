import { APP_INITIALIZER, makeEnvironmentProviders } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// Factory function to create the TranslateHttpLoader
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

// Factory function to initialize translations
export function initializeTranslations(translate: TranslateService) {
  return () => {
    // Available languages
    translate.addLangs(['en', 'es']);

    // Set default language as fallback
    translate.setDefaultLang('es');

    // Try to get browser language
    const browserLang = translate.getBrowserLang();

    // Use browser language if it's available in our translations, otherwise use default
    // Only use first two characters of language code (e.g. 'en-US' becomes 'en')
    const langToUse = browserLang?.match(/en|es/) ? browserLang : 'es';

    // Use detected language
    translate.use(langToUse);

    // Return a promise to ensure the translations are loaded before app starts
    return translate.get('HOME.HERO.TITLE').toPromise();
  };
}

// Main provider function for translations
export function provideTranslations() {
  return makeEnvironmentProviders([
    // Import the TranslateModule with configuration
    TranslateModule.forRoot({
      defaultLanguage: 'es',
      isolate: false,
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }).providers || [],

    // Add an APP_INITIALIZER to load translations at startup and detect browser language
    {
      provide: APP_INITIALIZER,
      useFactory: initializeTranslations,
      deps: [TranslateService],
      multi: true,
    },
  ]);
}

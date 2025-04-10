// translate-server.loader.ts
import { TranslateLoader } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';

// Importaciones estáticas (simuladas) que no dependen de fs o path
const translations: { [key: string]: any } = {
  es: require('../assets/i18n/es.json'),
  en: require('../assets/i18n/en.json'),
  // Agrega todos los idiomas que necesites
};

export class TranslateServerLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    return of(translations[lang] || {});
  }
}

export function translateServerLoaderFactory() {
  return new TranslateServerLoader();
}

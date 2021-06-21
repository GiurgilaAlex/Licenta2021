import { registerLocaleData } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import localeEn from '@angular/common/locales/en';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

const httpLoaderFactory = (http: HttpClient): TranslateHttpLoader => new TranslateHttpLoader(http, 'assets/i18n/', '.json');
export function initializeTranslationFactory(translateService: TranslateService): () => Promise<any> {
  return () => {
    translateService.setDefaultLang('en');
    registerLocaleData(localeEn, 'en');
    return translateService.use('en').toPromise();
  };
}

@NgModule({
  imports: [TranslateModule],
  exports: [TranslateModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeTranslationFactory,
      deps: [TranslateService],
      multi: true
    },
    {
      provide: MAT_DATE_LOCALE,
      useValue: 'en'
    }
  ]
})
export class AppTranslationModule {
  static forRoot(): ModuleWithProviders {
    return TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient]
      }
    })
  }
}
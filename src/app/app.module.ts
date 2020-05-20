import { Injector, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { JsonFormsAngularMaterialModule } from '@jsonforms/angular-material';
import { JsonFormsAngularService } from '@jsonforms/angular';
import { JsonFormsModule } from '@jsonforms/angular';
import { createCustomElement } from '@angular/elements';
import { initialState } from './store';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    JsonFormsModule,
    JsonFormsAngularMaterialModule,
  ],
  schemas: [],
  providers: [],
  entryComponents: [AppComponent]
})

export class AppModule {
  constructor(jsonformsService: JsonFormsAngularService, private injector: Injector) {
    jsonformsService.init(initialState.jsonforms);
  }

  ngDoBootstrap() {
    const el = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('ng-jsonforms', el);
   }
}

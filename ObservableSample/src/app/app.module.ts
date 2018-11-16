import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { ObservableSampleWebPartComponent } from './observable-sample-web-part/observable-sample-web-part.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ObservableSampleWebPartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  entryComponents: [ObservableSampleWebPartComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(ObservableSampleWebPartComponent, { injector: this.injector });
    customElements.define('app-observable-sample-web-part', el);
  }
}

import { ProductsEffects } from './state/effects/products.effects';
import { ROOT_REDUCERS } from './state/app.state';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    EffectsModule.forRoot([ProductsEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

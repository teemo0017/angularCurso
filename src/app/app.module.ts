import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { counterModule } from './counter/counter.module';


import { AppComponent } from './app.component';
import { heroesModule } from './heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    counterModule,
    BrowserModule,
    AppRoutingModule,
    heroesModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

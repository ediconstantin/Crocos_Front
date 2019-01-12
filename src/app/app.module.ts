import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NairuModule } from './app-nairu.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimengModule } from './app-primeng.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NairuModule,
    PrimengModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

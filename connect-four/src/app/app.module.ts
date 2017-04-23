import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routes } from './app.router';

import { AppComponent } from './app.component';
import { Connect4Component } from './connect4/connect4.component';
import { HomeComponent } from './home/home.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { DataDrivenComponent } from './data-driven/data-driven.component';
import { FormDemoComponent } from './form-demo/form-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    Connect4Component,
    HomeComponent,
    TemplateDrivenComponent,
    DataDrivenComponent,
    FormDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routes } from './app.router';

import { AppComponent } from './app.component';
import { Connect4Component } from './connect4/connect4.component';
import { HomeComponent } from './home/home.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { DataDrivenComponent } from './data-driven/data-driven.component';
import { FormDemoComponent } from './form-demo/form-demo.component';
import { SwitchControlComponent } from './switchcontrol/switchcontrol.component';

@NgModule({
  declarations: [
    AppComponent,
    Connect4Component,
    HomeComponent,
    TemplateDrivenComponent,
    DataDrivenComponent,
    FormDemoComponent,
    SwitchControlComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

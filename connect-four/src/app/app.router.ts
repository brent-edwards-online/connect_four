import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Connect4Component } from './connect4/connect4.component';
import { FormDemoComponent } from './form-demo/form-demo.component';
import { DataDrivenComponent } from './data-driven/data-driven.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';

export const router: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'connect4', component: Connect4Component },
    { path: 'form-demo', component: FormDemoComponent },
    { path: 'data-driven', component: DataDrivenComponent },
    { path: 'template-driven', component: TemplateDrivenComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);


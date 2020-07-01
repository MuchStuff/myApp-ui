import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddCsrfHeaderInterceptorService } from './_services/csrf/add-csrf.service';

@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        HomeComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    providers: [{ 
        provide: HTTP_INTERCEPTORS, 
        useClass: AddCsrfHeaderInterceptorService,
        multi: true
    }],
    bootstrap: [AppComponent]
})
export class AppModule { }

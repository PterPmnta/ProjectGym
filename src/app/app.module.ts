import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { LoginComponent } from './Login/Login.component';

import { NgxSpinnerModule } from "ngx-spinner";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeadComponent } from './Head/Head.component';
import { ClientsComponent } from './Clients/Clients.component';
import { ClientsListComponent } from './ClientsList/ClientsList.component';
import { AddClientComponent } from './AddClient/AddClient.component';

import { ProgressbarModule } from 'ngx-bootstrap/progressbar';

@NgModule({
  declarations: [					
    AppComponent,
    LoginComponent,
    HeadComponent,
      ClientsComponent,
      ClientsListComponent,
      AddClientComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AccordionModule.forRoot(),
    ProgressbarModule.forRoot(),
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

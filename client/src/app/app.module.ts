import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { SessionService } from '../services/session.service';
import { CustomerService } from '../services/customer.service';
import { RouterModule } from "@angular/router";
import { routes } from "./routes";
import { NavComponent } from './nav/nav.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CustomersInfoComponent } from './customers-info/customers-info.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CustomersListComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    CustomersInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SessionService, CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

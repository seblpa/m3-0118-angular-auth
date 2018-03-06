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
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { FilterPipe } from './pipes/filter.pipe';
import { AgmCoreModule } from '@agm/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule} from '@angular/material';
import { MatCheckboxModule} from '@angular/material';
import { CalendarComponent } from './calendar/calendar.component';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule, MatMenuModule, MatToolbarModule, MatIconModule, MatCardModule, MatSidenavModule, MatInputModule, MatTooltipModule, MatNativeDateModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CustomersListComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    CustomersInfoComponent,
    CustomerEditComponent,
    CustomerCreateComponent,
    FilterPipe,
    CalendarComponent
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA7l7cJgqMpiRpB7wC4pxA7hAeWsykSXvs'
    }),
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule, 
    MatMenuModule, 
    MatToolbarModule, 
    MatIconModule, 
    MatCardModule,
    MatSidenavModule, 
    MatInputModule, 
    MatTooltipModule, 
    MatNativeDateModule 
  ],
  providers: [SessionService, CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

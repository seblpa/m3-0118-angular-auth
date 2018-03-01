import { Routes } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { LoginComponent } from "./login/login.component";
import { SignupComponent} from "./signup/signup.component";
import { CustomersListComponent } from "./customers-list/customers-list.component";

export const routes: Routes = [
 {path: "" , component: HomeComponent},
 {path: 'signup' , component: SignupComponent},
 {path: 'login' , component: LoginComponent},
 {path: "customers" , component: CustomersListComponent },
 { path: "**", redirectTo: ""}
]
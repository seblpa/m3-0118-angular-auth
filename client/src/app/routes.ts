import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { CustomersListComponent } from "./customers-list/customers-list.component";
import { CustomersInfoComponent } from "./customers-info/customers-info.component";
import { CustomerEditComponent } from "./customer-edit/customer-edit.component";
import { CustomerCreateComponent } from "./customer-create/customer-create.component";

export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "signup", component: SignupComponent },
  { path: "login", component: LoginComponent },
  { path: "customers", component: CustomersListComponent },
  { path: "customers/:id", component: CustomersInfoComponent },
  { path: "customers/edit/:id", component: CustomerEditComponent },
  { path: "customer/create", component: CustomerCreateComponent },
  { path: "**", redirectTo: "" }
];

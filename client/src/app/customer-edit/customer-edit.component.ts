import { Component, OnInit } from "@angular/core";
import { SessionService } from "../../services/session.service";
import { CustomerService } from "../../services/customer.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-customer-edit",
  templateUrl: "./customer-edit.component.html",
  styleUrls: ["./customer-edit.component.css"]
})
export class CustomerEditComponent implements OnInit {
  customer: any;
  name;
  email;

  constructor(
    public customerService: CustomerService,
    private router: Router,
    private route: ActivatedRoute,
    public session: SessionService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getCustomer(params.id);
    });
  }

  getCustomer(id) {
    this.customerService
      .getCustomerById(id)
      .subscribe(item => (this.customer = item));
    console.log(this.customer);
  }

  editCustomer(id) {
    const name = this.name;
    const email = this.email;
    console.log(this.name, this.email);
    this.customerService
      .editCustomer(id, name, email)
      .subscribe(item => (this.customer = item));
    console.log(this.customer);
  }
}

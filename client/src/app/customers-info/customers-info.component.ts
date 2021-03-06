import { Component, OnInit } from "@angular/core";
import { SessionService } from "../../services/session.service";
import { CustomerService } from "../../services/customer.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-customers-info",
  templateUrl: "./customers-info.component.html",
  styleUrls: ["./customers-info.component.css"]
})
export class CustomersInfoComponent implements OnInit {
  customer: any;

  constructor(
    public customerService: CustomerService,
    private router: Router,
    private route: ActivatedRoute,
    public session: SessionService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log("my params");
      console.log(params.id);
      this.getCustomer(params.id);
    });
  }

  getCustomer(id) {
    this.customerService
      .getCustomerById(id)
      .subscribe(item => (this.customer = item));
  }

  delete() {
    this.customerService.delete(this.customer._id).subscribe(m => {
      this.router.navigate(["/customers"]);
    });
  }
}

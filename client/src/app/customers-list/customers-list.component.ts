import { Component, OnInit } from "@angular/core";
import { SessionService } from "../../services/session.service";
import { CustomerService } from "../../services/customer.service";

@Component({
  selector: "app-customers-list",
  templateUrl: "./customers-list.component.html",
  styleUrls: ["./customers-list.component.css"]
})
export class CustomersListComponent implements OnInit {
  customers: any = [];
  //lat: number = 51.678418;
  //lng: number = 7.809007;
  lng: number;
  lat: number;

  constructor(
    public customerService: CustomerService,
    public session: SessionService
  ) {}

  ngOnInit() {
    this.customerService.getCustomer().subscribe(res => {
      this.customers = res;
      console.log("hola===============");
      console.log(typeof this.customers[0].location.lat)
      console.log(this.customers);
      this.lng = this.customers[0].location.lng;
      this.lat = this.customers[0].location.lat;
      console.log(this.lng, this.lat)
    });
  }


}

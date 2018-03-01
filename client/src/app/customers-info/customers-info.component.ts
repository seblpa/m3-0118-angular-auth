import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { CustomerService} from '../../services/customer.service';

@Component({
  selector: 'app-customers-info',
  templateUrl: './customers-info.component.html',
  styleUrls: ['./customers-info.component.css']
})
export class CustomersInfoComponent implements OnInit {
  customers: any = [];
  
  constructor(public customerService: CustomerService,public session: SessionService) {
    this.customerService.getCustomer().subscribe(res => {
      console.log(res)
      this.customers = res;
      console.log(this.customers)
    });
   }

  ngOnInit() {
  }

}

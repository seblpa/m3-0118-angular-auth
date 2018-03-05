import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { CustomerService} from '../../services/customer.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {
customers: any = [];

  constructor(public customerService: CustomerService,public session: SessionService) {
  }
  
  ngOnInit() {
    this.customerService.getCustomer().subscribe(res => {
      this.customers = res;
      console.log('hola===============')
      console.log(this.customers)
    });
  }

}

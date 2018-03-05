import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { CustomerService } from '../../services/customer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  error: string;
  data: object;
  customer: any;
  name;
  email;

  constructor(private customerService : CustomerService, private session: SessionService, private router: Router) { }

  ngOnInit(){}

  // @Output() outputcall = new EventEmitter<string>();

  createCustomer(n, e) {
    this.customerService.createCustomer(n,e).subscribe((res)=> this.router.navigate(['/customers']))
  }
}


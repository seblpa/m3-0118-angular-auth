import { SessionService } from '../../services/session.service';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { ActivatedRoute, Router } from '@angular/router';
// import {MatDatepickerInputEvent} from '@angular/material/datepicker';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

user: object

constructor(private customerService : CustomerService, private session: SessionService, private router: Router) { }

 
  ngOnInit() {
  }

  myDate: Date;
  values: String;
  error: String
  p: any = [];
  item: any;
  picker: any;

  submitDate(myDate) {
    console.log(myDate.toString())
  }
}

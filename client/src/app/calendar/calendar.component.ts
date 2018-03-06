import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { CustomerService } from '../../services/customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  myDate: Date;
  values: String;
  error: String
  p: any = [];
  item: any;
  picker: any;

  

  constructor(private customerService : CustomerService, private session: SessionService, private router: Router) { }

  ngOnInit() {
  }


  submitDate(myDate) {
    console.log(myDate)
  }
}

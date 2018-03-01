import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import {  ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  username:string;
  password:string;
  email:string;
  error:string;

  constructor(public session:SessionService, public router:Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }
  signup(){
        this.session.signup(this.username,this.password, this.email)
        .catch(e => this.error = e)
        .subscribe(user => {
          console.log(`Welcome ${user.username}`);
          this.router.navigate(['customer'])
          });
      }
}

import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import {  ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string;
  password:string;
  email:string;
  error:string;

  constructor(public session:SessionService, public router:Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }
  login(){
        this.session.login(this.username,this.password)
        .catch(e => this.error = e)
        .subscribe(user => {
          console.log(`Welcome ${user.username}`);
          if(this.session.getUser()){
            this.router.navigate(['customers'])
          }
          }
        );
      }
}

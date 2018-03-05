import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Rx";
import { SessionService } from "./session.service";

@Injectable()
export class CustomerService {
  BASE_URL: string = "http://localhost:3000";
  options: object = { withCredentials: true };
  customerId;

  constructor(private http: Http) {}

  getCustomer() {
    return this.http
      .get(`${this.BASE_URL}/customer/show`, this.options)
      .map(res => {
        console.log(res.json());
        return res.json();
      })
      .catch(e => e);
  }

  getCustomerById(id) {
    return this.http
      .get(`${this.BASE_URL}/customer/${id}`)
      .map(res => res.json());
  }

  editCustomer(customerId, name, email) {
    console.log("entro al servicio");
    console.log(customerId, name, email);
    return this.http
      .put(`${this.BASE_URL}/customer/edit/${customerId}`, { name, email })
      .map(res => res.json());
  }

  createCustomer(name, email) {
    return this.http
      .post(`${this.BASE_URL}/customer/create`, { name, email }, this.options)
      .map(res => res.json());
  }

  delete(id) {
    return this.http
      .get(`${this.BASE_URL}/customer/delete/${id}`)
      .map(res => res.json());
  }
}

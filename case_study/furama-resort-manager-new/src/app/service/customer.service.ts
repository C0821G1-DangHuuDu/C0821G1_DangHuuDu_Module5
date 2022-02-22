import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  API_URL = 'http://localhost:3000/customerList';

  constructor(private httpClient: HttpClient) { }
  findAll(): Observable<Customer[]> {
  return this.httpClient.get<Customer[]>(this.API_URL);
  }
  saveNewCustomer(newCustomer: Customer): Observable<void>{
    return this.httpClient.post<void>(this.API_URL, newCustomer);
  }

  deleteCustomer(idDelete: number): Observable<void>{
    return this.httpClient.delete<void>(this.API_URL + '/' + idDelete);
  }
  findById(id: number): Observable<Customer>{
    return this.httpClient.get<Customer>(this.API_URL  + '/' + id);
  }
  saveEditCustomer(editCustomer: Customer): Observable<void>{
    return this.httpClient.patch<void>(this.API_URL + '/' + editCustomer.id, editCustomer);
  }
}

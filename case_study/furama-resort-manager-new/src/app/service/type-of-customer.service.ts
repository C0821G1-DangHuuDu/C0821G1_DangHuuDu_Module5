import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../model/customer';
import {TypeCustomer} from '../model/type-customer';

@Injectable({
  providedIn: 'root'
})
export class TypeOfCustomerService {
  API_URL = 'http://localhost:3000/typeOfCustomer';
  constructor(private httpClient: HttpClient) { }
  findAll(): Observable<TypeCustomer[]> {
    return this.httpClient.get<TypeCustomer[]>(this.API_URL);
  }
}

import {Component, OnInit} from '@angular/core';
import {Customer} from '../model/customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customerList: Array<Customer>;

  constructor() {
    this.customerList = [
      {
        id: 1,
        firstName: 'Huu',
        lastName: 'Du',
        dateOfBirth: '2022-02-22',
        gender: 1,
        phone: '0905111222',
        email: 'du@gmail.com',
        address: 'QN'
      },
      {
        id: 2,
        firstName: 'Gia',
        lastName: 'Bao',
        dateOfBirth: '2022-02-23',
        gender: 1,
        phone: '0905111333',
        email: 'bao@gmail.com',
        address: 'DN'
      },
      {
        id: 2,
        firstName: 'Thao',
        lastName: 'Vy',
        dateOfBirth: '2022-02-24',
        gender: 0,
        phone: '0905111444',
        email: 'Vy@gmail.com',
        address: 'DN'
      }
    ];
  }

  ngOnInit(): void {
  }

}

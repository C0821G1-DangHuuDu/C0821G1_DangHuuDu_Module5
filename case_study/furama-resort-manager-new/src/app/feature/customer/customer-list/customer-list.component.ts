import {Component, OnInit} from '@angular/core';
import {Customer} from '../../../model/customer';
import {CustomerService} from '../../../service/customer.service';
import {Router} from '@angular/router';
import {TypeOfCustomerService} from '../../../service/type-of-customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customerList: Array<Customer>;
  // id delete
  idDelete: number;
  customerDelete: Customer;
  // phân trang
  currentPage: number;
  // tìm kiếm
  term: any;

  constructor(private customerService: CustomerService,
              private router: Router,
  ) {
    this.customerService.findAll().subscribe(value => {
      this.customerList = value;
    });
  }

  ngOnInit(): void {
  }


  delete(id: number) {
    this.idDelete = id;
    this.customerService.findById(this.idDelete).subscribe(value => {
      this.customerDelete = value;
      console.log(this.customerDelete);
    }, error => {}, () => {});
  }

  deleteCustomer() {
    this.customerService.deleteCustomer(this.idDelete).subscribe(value => {
      }, error => {
      },
      () => {
        this.customerService.findAll().subscribe(value => {
          this.customerList = value;
          console.log(this.customerList);
        });
      });
  }
}

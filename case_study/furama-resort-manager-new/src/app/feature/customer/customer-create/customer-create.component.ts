import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../../service/customer.service';
import {Router} from '@angular/router';
import {TypeOfCustomerService} from '../../../service/type-of-customer.service';
import {TypeCustomer} from '../../../model/type-customer';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  customerForm: FormGroup;
  typeOfCustomerList: Array<TypeCustomer>;
  constructor(private customerService: CustomerService,
              private router: Router,
              private typeOfCustomerService: TypeOfCustomerService) {
    this.customerForm = new FormGroup({
      id: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      dateOfBirth: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', Validators.required),
      typeOfCustomer: new FormControl(),
    });
    this.typeOfCustomerService.findAll().subscribe(value => {
      this.typeOfCustomerList = value;
    });
  }

  ngOnInit(): void {
  }

  saveNewCustomer(): void{
    const newCustomer = Object.assign({}, this.customerForm.value);
    this.customerService.saveNewCustomer(newCustomer).subscribe(value => {
      }, error => {},
      () => {
        this.router.navigateByUrl('/customer/list');
      });
  }
  getAllTypeOfCustomer() {}
}

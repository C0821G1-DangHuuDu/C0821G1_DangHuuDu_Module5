import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../../service/customer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Customer} from '../../../model/customer';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {
  customerEditFom: FormGroup;
  customerEdit: Customer;

  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.customerEditFom = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      dateOfBirth: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    const editID = this.activatedRoute.snapshot.params.id;
    this.customerService.findById(editID).subscribe(value => {
      this.customerEdit = value;
      this.customerEditFom.patchValue({
        firstName: this.customerEdit.firstName,
        lastName: this.customerEdit.lastName,
        dateOfBirth: this.customerEdit.dateOfBirth,
        gender: this.customerEdit.gender,
        phone: this.customerEdit.phone,
        email: this.customerEdit.email,
        address: this.customerEdit.address,
      });
    }, error => {}, () => {
    });
  }


  editCustomer(): void {
    const customerUpdate = Object.assign({}, this.customerEditFom.value);
    customerUpdate.id = this.customerEdit.id;
    this.customerService.saveEditCustomer(customerUpdate).subscribe(value => {},
        error => {},
      () => { this.router.navigateByUrl('/customer/list');
    });
  }
}
